import { useEffect, useMemo } from 'react';
import { Chip, Grid, Paper, Stack, Typography } from '@mui/material';
import AppLayout from '@/components/layout/AppLayout';
import { useKpis } from '@/hooks/useKpis';
import { useEquipmentRows } from '@/hooks/useEquipmentRows';
import LoadingState from '@/components/ui/states/LoadingState';
import ErrorState from '@/components/ui/states/ErrorState';
import EmptyState from '@/components/ui/states/EmptyState';
import KpiCard from '@/components/dashboard/KpiCard';
import UiTable, { UiTableColumn } from '@/components/ui/UiTable';
import { formatPercentage, formatStatus, formatTimestamp } from '@/utils/formatters';
import { useTableState } from '@/utils/table/useTableState';
import { applyFilter, applyPagination, applySort } from '@/utils/table/tableUtils';
import type { EquipmentRow } from '@/data/types';

const statusColorMap = {
  online: 'success',
  offline: 'error',
  maintenance: 'warning',
  degraded: 'info'
} as const;

const renderKpiSection = (data: ReturnType<typeof useKpis>['data'], isLoading: boolean, isError: boolean, refetch: () => void) => {
  if (isLoading) {
    return <LoadingState title="Loading KPIs" message="Calculating plant insights…" skeletonCount={4} />;
  }

  if (isError) {
    return (
      <ErrorState
        message="Unable to load KPIs. Remove the ?error=1 query parameter or try again."
        onRetry={refetch}
      />
    );
  }

  if (!data?.length) {
    return <EmptyState message="There are no KPI metrics configured for this workspace yet." />;
  }

  return (
    <Grid container spacing={3}>
      {data.map((metric) => (
        <Grid item xs={12} sm={6} md={3} lg={2} key={metric.id}>
          <KpiCard label={metric.label} value={metric.value} delta={metric.delta} unit={metric.unit} />
        </Grid>
      ))}
    </Grid>
  );
};

type SummarySortableKeys = 'name' | 'status' | 'location' | 'updatedAt' | 'score';

const DashboardPage = () => {
  const {
    data: kpis,
    isLoading: isLoadingKpis,
    isError: isErrorKpis,
    refetch: refetchKpis
  } = useKpis();
  const {
    data: equipmentRows,
    isLoading: isLoadingRows,
    isError: isErrorRows,
    refetch: refetchRows
  } = useEquipmentRows();
  const tableState = useTableState<SummarySortableKeys>({ initialPageSize: 10 });

  const processedRows = useMemo(() => {
    if (!equipmentRows) return [];
    const filtered = applyFilter(equipmentRows ?? [], tableState.filterText);
    const sorted = applySort(filtered, tableState.sortKey as keyof EquipmentRow | null, tableState.sortDir);
    return sorted;
  }, [equipmentRows, tableState.filterText, tableState.sortKey, tableState.sortDir]);

  const pagedRows = useMemo(
    () => applyPagination(processedRows, tableState.page, tableState.pageSize),
    [processedRows, tableState.page, tableState.pageSize]
  );

  useEffect(() => {
    const totalPages = Math.max(1, Math.ceil(processedRows.length / tableState.pageSize));
    if (tableState.page > totalPages) {
      tableState.setPage(totalPages);
    }
  }, [processedRows.length, tableState.page, tableState.pageSize, tableState.setPage]);

  const renderRecentUpdates = () => {
    if (isLoadingRows) {
      return (
        <LoadingState
          title="Loading equipment updates"
          message="Fetching telemetry snapshots…"
          skeletonCount={5}
        />
      );
    }

    if (isErrorRows) {
      return (
        <ErrorState
          message="Unable to load equipment data. Remove the ?error=1 query parameter or retry."
          onRetry={refetchRows}
        />
      );
    }

    if (!equipmentRows?.length) {
      return <EmptyState message="No equipment rows available for the selected workspace." />;
    }

    const columns: UiTableColumn<EquipmentRow>[] = [
      { key: 'name', label: 'Name', sortable: true },
      {
        key: 'status',
        label: 'Status',
        sortable: true,
        render: (row) => <Chip label={formatStatus(row.status)} color={statusColorMap[row.status]} size="small" />
      },
      { key: 'location', label: 'Location', sortable: true },
      {
        key: 'updatedAt',
        label: 'Updated',
        sortable: true,
        render: (row) => formatTimestamp(row.updatedAt)
      },
      {
        key: 'score',
        label: 'Score',
        sortable: true,
        align: 'right',
        render: (row) => formatPercentage(row.score)
      }
    ];

    return (
      <UiTable
        dense
        columns={columns}
        rows={pagedRows}
        filterText={tableState.filterText}
        onFilterChange={tableState.setFilterText}
        sortKey={tableState.sortKey}
        sortDir={tableState.sortDir}
        onSort={(key) => tableState.setSort(key as SummarySortableKeys)}
        page={tableState.page}
        pageSize={tableState.pageSize}
        totalRows={processedRows.length}
        onPageChange={tableState.setPage}
        onPageSizeChange={tableState.setPageSize}
        pageSizeOptions={[10, 20, 30]}
        emptyState={<EmptyState message="No equipment rows match your filters." />}
      />
    );
  };

  return (
    <AppLayout title="Dashboard">
      <Stack spacing={4} component="section">
        <Stack spacing={1}>
          <Typography variant="h5" fontWeight={600}>
            Operational KPIs
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Monitor live throughput, uptime, and key alarms.
          </Typography>
        </Stack>
        {renderKpiSection(kpis, isLoadingKpis, isErrorKpis, refetchKpis)}

        <Paper
          elevation={0}
          sx={{ p: 3, borderRadius: 2, border: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Stack spacing={1} mb={2}>
            <Typography variant="h6">Recent Equipment Updates</Typography>
            <Typography variant="body2" color="text.secondary">
              Snapshot of the most recent status changes from the operations floor.
            </Typography>
          </Stack>
          {renderRecentUpdates()}
        </Paper>
      </Stack>
    </AppLayout>
  );
};

export default DashboardPage;
