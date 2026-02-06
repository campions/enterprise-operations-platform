import { act, renderHook } from '@testing-library/react';
import { useTableState } from '@/utils/table/useTableState';

type SortKey = 'name' | 'status';

describe('useTableState', () => {
  it('initializes with provided defaults', () => {
    const { result } = renderHook(() => useTableState<SortKey>({ initialPageSize: 25, initialSortKey: 'name' }));
    expect(result.current.page).toBe(1);
    expect(result.current.pageSize).toBe(25);
    expect(result.current.sortKey).toBe('name');
    expect(result.current.sortDir).toBe('asc');
  });

  it('updates pagination and prevents invalid pages', () => {
    const { result } = renderHook(() => useTableState<SortKey>());

    act(() => result.current.setPage(5));
    expect(result.current.page).toBe(5);

    act(() => result.current.setPage(-2));
    expect(result.current.page).toBe(1);

    act(() => result.current.setPageSize(50));
    expect(result.current.pageSize).toBe(50);
    expect(result.current.page).toBe(1);
  });

  it('toggles sort direction and resets when setting filter', () => {
    const { result } = renderHook(() => useTableState<SortKey>());

    act(() => result.current.setSort('name'));
    expect(result.current.sortKey).toBe('name');
    expect(result.current.sortDir).toBe('asc');

    act(() => result.current.setSort('name'));
    expect(result.current.sortDir).toBe('desc');

    act(() => {
      result.current.setPage(3);
      result.current.setFilterText('pump');
    });
    expect(result.current.filterText).toBe('pump');
    expect(result.current.page).toBe(1);
  });
});
