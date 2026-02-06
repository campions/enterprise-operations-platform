import { applyFilter, applyPagination, applySort } from '@/utils/table/tableUtils';

type TestRow = {
  id: string;
  name: string;
  location: string;
  status: string;
  score: number;
};

const sampleRows: TestRow[] = [
  { id: '1', name: 'Alpha Sensor', location: 'Plant A', status: 'online', score: 90 },
  { id: '2', name: 'Beta Pump', location: 'Plant B', status: 'offline', score: 75 },
  { id: '3', name: 'Gamma Valve', location: 'Warehouse', status: 'maintenance', score: 82 },
  { id: '4', name: 'Delta Conveyor', location: 'Plant C', status: 'online', score: 88 }
];

describe('tableUtils.applyFilter', () => {
  it('returns all rows when filter is empty', () => {
    expect(applyFilter(sampleRows, '')).toEqual(sampleRows);
  });

  it('matches against name, location, and status fields', () => {
    const filtered = applyFilter(sampleRows, 'plant b');
    expect(filtered).toHaveLength(1);
    expect(filtered[0].id).toBe('2');
  });
});

describe('tableUtils.applySort', () => {
  it('sorts numbers ascending and descending', () => {
    const asc = applySort(sampleRows, 'score', 'asc');
    expect(asc.map((row) => row.id)).toEqual(['2', '3', '4', '1']);

    const desc = applySort(sampleRows, 'score', 'desc');
    expect(desc.map((row) => row.id)).toEqual(['1', '4', '3', '2']);
  });

  it('returns original order when no key provided', () => {
    const unchanged = applySort(sampleRows, null, 'asc');
    expect(unchanged).toEqual(sampleRows);
  });
});

describe('tableUtils.applyPagination', () => {
  it('returns a slice for the requested page', () => {
    const paged = applyPagination(sampleRows, 2, 2);
    expect(paged).toEqual(sampleRows.slice(2, 4));
  });

  it('clamps start index when page is below 1', () => {
    const paged = applyPagination(sampleRows, 0, 2);
    expect(paged).toEqual(sampleRows.slice(0, 2));
  });
});
