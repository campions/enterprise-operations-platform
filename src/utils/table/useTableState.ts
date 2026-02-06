import { useCallback, useState } from 'react';

export type SortDirection = 'asc' | 'desc';

export interface TableState<T extends string = string> {
  page: number;
  pageSize: number;
  sortKey: T | null;
  sortDir: SortDirection;
  filterText: string;
  setPage: (page: number) => void;
  setPageSize: (size: number) => void;
  setSort: (key: T) => void;
  setFilterText: (value: string) => void;
}

const DEFAULT_PAGE_SIZE = 10;

interface UseTableStateOptions<T extends string> {
  initialPageSize?: number;
  initialSortKey?: T | null;
  initialSortDir?: SortDirection;
  initialFilterText?: string;
}

export function useTableState<T extends string>(options?: UseTableStateOptions<T>) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(options?.initialPageSize ?? DEFAULT_PAGE_SIZE);
  const [sortKey, setSortKey] = useState<T | null>(options?.initialSortKey ?? null);
  const [sortDir, setSortDir] = useState<SortDirection>(options?.initialSortDir ?? 'asc');
  const [filterText, setFilterText] = useState(options?.initialFilterText ?? '');

  const handleSetPage = useCallback((nextPage: number) => {
    setPage(Math.max(1, nextPage));
  }, []);

  const handleSetPageSize = useCallback((nextSize: number) => {
    setPageSize(nextSize);
    setPage(1);
  }, []);

  const handleSetSort = useCallback(
    (key: T) => {
      setSortKey((current) => {
        if (current === key) {
          setSortDir((dir) => (dir === 'asc' ? 'desc' : 'asc'));
          return current;
        }
        setSortDir('asc');
        return key;
      });
      setPage(1);
    },
    []
  );

  const handleSetFilterText = useCallback((value: string) => {
    setFilterText(value);
    setPage(1);
  }, []);

  const tableState: TableState<T> = {
    page,
    pageSize,
    sortKey,
    sortDir,
    filterText,
    setPage: handleSetPage,
    setPageSize: handleSetPageSize,
    setSort: handleSetSort,
    setFilterText: handleSetFilterText
  };

  return tableState;
}
