import { useQuery } from '@tanstack/react-query';
import { mockKpis } from '@/data/mockData';
import type { KpiMetric } from '@/data/types';
import { useQueryErrorToggle } from './useQueryErrorToggle';

const fetchKpis = (shouldError: boolean) =>
  new Promise<KpiMetric[]>((resolve, reject) => {
    setTimeout(() => {
      if (shouldError) {
        reject(new Error('Failed to load KPI metrics'));
        return;
      }

      resolve(mockKpis());
    }, 400);
  });

export const useKpis = () => {
  const shouldError = useQueryErrorToggle();

  const query = useQuery({
    queryKey: ['kpis', { shouldError }],
    queryFn: () => fetchKpis(shouldError),
    staleTime: 30_000
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch
  };
};
