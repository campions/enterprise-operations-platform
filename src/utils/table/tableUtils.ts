import type { SortDirection } from './useTableState';

type BaseRow = {
  name?: string;
  location?: string;
  status?: string;
  [key: string]: unknown;
};

export const applyFilter = <T extends BaseRow>(rows: T[], filterText: string): T[] => {
  if (!filterText.trim()) {
    return rows;
  }

  const needle = filterText.trim().toLowerCase();
  return rows.filter((row) => {
    const haystack = [row.name, row.location, row.status]
      .filter(Boolean)
      .map((value) => String(value).toLowerCase())
      .join(' ');
    return haystack.includes(needle);
  });
};

export const applySort = <T extends Record<string, unknown>>(
  rows: T[],
  sortKey: keyof T | null,
  sortDir: SortDirection
): T[] => {
  if (!sortKey) {
    return rows;
  }

  return [...rows].sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];

    if (aValue === bValue) return 0;
    if (aValue === undefined || aValue === null) return 1;
    if (bValue === undefined || bValue === null) return -1;

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDir === 'asc' ? aValue - bValue : bValue - aValue;
    }

    const comparison = String(aValue).localeCompare(String(bValue), undefined, { numeric: true, sensitivity: 'base' });
    return sortDir === 'asc' ? comparison : -comparison;
  });
};

export const applyPagination = <T>(rows: T[], page: number, pageSize: number): T[] => {
  const start = (page - 1) * pageSize;
  if (start < 0) {
    return rows.slice(0, pageSize);
  }
  return rows.slice(start, start + pageSize);
};
