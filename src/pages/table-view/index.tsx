import { useEffect, useMemo, useState } from 'react';
import { Chip, Stack, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import AppLayout from '@/components/layout/AppLayout';
import { useEquipmentRows } from '@/hooks/useEquipmentRows';
import { formatPercentage, formatStatus, formatTimestamp } from '@/utils/formatters';
import UiTable, { UiTableColumn } from '@/components/ui/UiTable';
import LoadingState from '@/components/ui/states/LoadingState';
import EmptyState from '@/components/ui/states/EmptyState';
import ErrorState from '@/components/ui/states/ErrorState';
import { useTableState } from '@/utils/table/useTableState';
import { applyFilter, applyPagination, applySort } from '@/utils/table/tableUtils';
import type { EquipmentRow } from '@/data/types';
import UiButton from '@/components/ui/UiButton';
import UiModal from '@/components/ui/UiModal';
import UiInput from '@/components/ui/UiInput';
import UiSelect from '@/components/ui/UiSelect';

const statusColorMap = {
  online: 'success',
  offline: 'error',
  maintenance: 'warning',
  degraded: 'info'
} as const;

type SortableKeys = 'name' | 'status' | 'updatedAt' | 'score';

type EditDraft = {
  name: string;
  status: EquipmentRow['status'];
  score: string;
};

const STATUS_OPTIONS: EquipmentRow['status'][] = ['online', 'degraded', 'maintenance', 'offline'];

const EquipmentTable = () => {
  const { data: rows, isLoading, isError, refetch } = useEquipmentRows();
  const tableState = useTableState<SortableKeys>({
    initialPageSize: 10
  });
  const [tableRows, setTableRows] = useState<EquipmentRow[]>([]);
  const [viewRow, setViewRow] = useState<EquipmentRow | null>(null);
  const [editingRowId, setEditingRowId] = useState<string | null>(null);
  const [editDraft, setEditDraft] = useState<EditDraft | null>(null);

  useEffect(() => {
    if (rows) {
      setTableRows(rows);
    }
  }, [rows]);

  const filtered = useMemo(
    () => applyFilter(tableRows, tableState.filterText),
    [tableRows, tableState.filterText]
  );
  const sorted = useMemo(
    () => applySort(filtered, (tableState.sortKey as keyof EquipmentRow | null), tableState.sortDir),
    [filtered, tableState.sortKey, tableState.sortDir]
  );
  const paged = useMemo(
    () => applyPagination(sorted, tableState.page, tableState.pageSize),
    [sorted, tableState.page, tableState.pageSize]
  );

  const { page, pageSize, setPage } = tableState;

  useEffect(() => {
    const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [sorted.length, page, pageSize, setPage]);

  if (isLoading) {
    return <LoadingState title="Loading equipment" message="Fetching telemetry and status history…" skeletonCount={5} />;
  }

  if (isError) {
    return (
      <ErrorState
        message="Unable to load equipment data. Remove the ?error=1 query parameter or try again."
        onRetry={refetch}
      />
    );
  }

  if (!rows?.length) {
    return <EmptyState message="No equipment rows available for the selected workspace." />;
  }

  const handleOpenView = (row: EquipmentRow) => setViewRow(row);
  const handleCloseView = () => setViewRow(null);

  const handleOpenEdit = (row: EquipmentRow) => {
    setEditingRowId(row.id);
    setEditDraft({
      name: row.name,
      status: row.status,
      score: row.score.toString()
    });
  };

  const handleCloseEdit = () => {
    setEditingRowId(null);
    setEditDraft(null);
  };

  const handleEditChange = <K extends keyof EditDraft>(field: K, value: EditDraft[K]) => {
    setEditDraft((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleSaveEdit = () => {
    if (!editingRowId || !editDraft) {
      return;
    }

    setTableRows((prev) =>
      prev.map((row) => {
        if (row.id !== editingRowId) {
          return row;
        }
        const parsedScore = Number(editDraft.score);
        return {
          ...row,
          name: editDraft.name.trim() || row.name,
          status: editDraft.status,
          score: Number.isNaN(parsedScore) ? row.score : parsedScore
        };
      })
    );

    handleCloseEdit();
  };

  const isSaveDisabled =
    !editDraft ||
    !editDraft.name.trim() ||
    editDraft.score.trim() === '' ||
    Number.isNaN(Number(editDraft.score));

  const columns: UiTableColumn<EquipmentRow>[] = [
    { key: 'name', label: 'Equipment', sortable: true },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (row) => <Chip label={formatStatus(row.status)} color={statusColorMap[row.status]} size="small" />
    },
    { key: 'location', label: 'Location' },
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
    },
    {
      key: 'actions',
      label: 'Actions',
      align: 'right',
      render: (row) => (
        <Stack direction="row" spacing={1} justifyContent="flex-end">
          <UiButton variant="text" size="small" onClick={() => handleOpenView(row)}>
            View
          </UiButton>
          <UiButton variant="outlined" size="small" onClick={() => handleOpenEdit(row)}>
            Edit
          </UiButton>
        </Stack>
      )
    }
  ];

  return (
    <>
      <UiTable
        columns={columns}
        rows={paged}
        filterText={tableState.filterText}
        onFilterChange={tableState.setFilterText}
        sortKey={tableState.sortKey}
        sortDir={tableState.sortDir}
        onSort={(key) => tableState.setSort(key as SortableKeys)}
        page={tableState.page}
        pageSize={tableState.pageSize}
        totalRows={sorted.length}
        onPageChange={tableState.setPage}
        onPageSizeChange={tableState.setPageSize}
        pageSizeOptions={[10, 25, 50]}
        emptyState={<EmptyState message="No equipment rows match your filters." />}
        data-testid="operations-table"
      />

      {viewRow ? (
        <UiModal
          open={Boolean(viewRow)}
          onClose={handleCloseView}
          title="Equipment Details"
          actions={
            <UiButton variant="outlined" onClick={handleCloseView}>
              Close
            </UiButton>
          }
        >
          <Stack spacing={2}>
            <Stack spacing={0.25}>
              <Typography variant="caption" color="text.secondary">
                Equipment
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                {viewRow.name}
              </Typography>
            </Stack>
            <Stack spacing={0.25}>
              <Typography variant="caption" color="text.secondary">
                Status
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                {formatStatus(viewRow.status)}
              </Typography>
            </Stack>
            <Stack spacing={0.25}>
              <Typography variant="caption" color="text.secondary">
                Location
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                {viewRow.location}
              </Typography>
            </Stack>
            <Stack spacing={0.25}>
              <Typography variant="caption" color="text.secondary">
                Updated
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                {formatTimestamp(viewRow.updatedAt)}
              </Typography>
            </Stack>
            <Stack spacing={0.25}>
              <Typography variant="caption" color="text.secondary">
                Score
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                {formatPercentage(viewRow.score)}
              </Typography>
            </Stack>
          </Stack>
        </UiModal>
      ) : null}

      {editDraft ? (
        <UiModal
          open={Boolean(editDraft)}
          onClose={handleCloseEdit}
          title="Edit Equipment"
          actions={
            <Stack direction="row" spacing={1}>
              <UiButton variant="text" onClick={handleCloseEdit}>
                Cancel
              </UiButton>
              <UiButton onClick={handleSaveEdit} disabled={isSaveDisabled}>
                Save
              </UiButton>
            </Stack>
          }
        >
          <Stack spacing={2}>
            <UiInput
              label="Equipment Name"
              value={editDraft.name}
              onChange={(event) => handleEditChange('name', event.target.value)}
            />
            <UiSelect
              label="Status"
              value={editDraft.status}
              onChange={(event) => handleEditChange('status', event.target.value as EquipmentRow['status'])}
            >
              {STATUS_OPTIONS.map((status) => (
                <MenuItem key={status} value={status}>
                  {formatStatus(status)}
                </MenuItem>
              ))}
            </UiSelect>
            <UiInput
              label="Score"
              type="number"
              value={editDraft.score}
              onChange={(event) => handleEditChange('score', event.target.value)}
            />
          </Stack>
        </UiModal>
      ) : null}
    </>
  );
};

const TableViewPage = () => (
  <AppLayout title="Table View">
    <EquipmentTable />
  </AppLayout>
);

export default TableViewPage;
