import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  TextField,
} from "@mui/material";
import { useId } from "react";
import type { ReactNode } from "react";
import type { SortDirection } from "@/utils/table/useTableState";

export interface UiTableColumn<T> {
  key: keyof T | string;
  label: ReactNode;
  sortable?: boolean;
  align?: "left" | "right" | "center";
  render?: (row: T) => ReactNode;
}

interface UiTableProps<T> {
  columns: UiTableColumn<T>[];
  rows: T[];
  dense?: boolean;
  maxHeight?: number | string;
  stickyHeader?: boolean;
  "data-testid"?: string;
  filterText?: string;
  onFilterChange?: (value: string) => void;
  sortKey?: string | null;
  sortDir?: SortDirection;
  onSort?: (key: string) => void;
  page?: number;
  pageSize?: number;
  totalRows?: number;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  pageSizeOptions?: number[];
  emptyState?: ReactNode;
}

const UiTable = <T extends Record<string, unknown>>({
  columns,
  rows,
  dense,
  maxHeight,
  stickyHeader,
  "data-testid": dataTestId,
  filterText,
  onFilterChange,
  sortKey,
  sortDir = "asc",
  onSort,
  page,
  pageSize,
  totalRows,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 25, 50],
  emptyState,
}: UiTableProps<T>) => {
  const showFilter = typeof onFilterChange === "function";
  const showPagination =
    typeof page === "number" &&
    typeof pageSize === "number" &&
    typeof onPageChange === "function";
  const filterInputId = useId();

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ borderRadius: 2, maxHeight: maxHeight ?? "none" }}
      data-testid={dataTestId}
    >
      {showFilter ? (
        <Box
          p={2}
          pb={0}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <TextField
            id={filterInputId}
            label="Filter results"
            value={filterText ?? ""}
            onChange={(event) => onFilterChange?.(event.target.value)}
            size="small"
            fullWidth
          />
        </Box>
      ) : null}
      <Table size={dense ? "small" : "medium"} stickyHeader={stickyHeader}>
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              const columnKey = column.key as string;
              const isSorted = sortKey === columnKey;
              const ariaSort: "ascending" | "descending" | "none" | undefined =
                column.sortable && onSort
                  ? isSorted
                    ? sortDir === "asc"
                      ? "ascending"
                      : "descending"
                    : "none"
                  : undefined;

              return (
                <TableCell
                  key={columnKey}
                  align={column.align ?? "left"}
                  sx={{ fontWeight: 600 }}
                  aria-sort={ariaSort}
                >
                  {column.sortable && onSort ? (
                    <TableSortLabel
                      active={isSorted}
                      direction={isSorted ? sortDir : "asc"}
                      onClick={() => onSort(columnKey)}
                    >
                      {column.label}
                    </TableSortLabel>
                  ) : (
                    column.label
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length ? (
            rows.map((row, rowIndex) => {
              const rowKey = (row as { id?: string | number }).id ?? rowIndex;
              return (
                <TableRow key={rowKey} hover>
                  {columns.map((column) => (
                    <TableCell
                      key={`${column.key.toString()}-${rowIndex}`}
                      align={column.align ?? "left"}
                    >
                      {column.render
                        ? column.render(row)
                        : (row[column.key as keyof T] as ReactNode)}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                {emptyState ?? "No data available"}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {showPagination ? (
        <TablePagination
          component="div"
          rowsPerPageOptions={pageSizeOptions}
          count={totalRows ?? rows.length}
          rowsPerPage={pageSize}
          page={Math.max(0, page - 1)}
          onPageChange={(_, newPage) => onPageChange(newPage + 1)}
          onRowsPerPageChange={(event) =>
            onPageSizeChange?.(parseInt(event.target.value, 10))
          }
        />
      ) : null}
    </TableContainer>
  );
};

export default UiTable;
