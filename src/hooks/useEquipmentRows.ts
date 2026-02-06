import { useQuery } from '@tanstack/react-query';
import { mockEquipmentRows } from '@/data/mockData';
import type { EquipmentRow } from '@/data/types';
import { useQueryErrorToggle } from './useQueryErrorToggle';

const fetchEquipmentRows = (shouldError: boolean) =>
  new Promise<EquipmentRow[]>((resolve, reject) => {
    setTimeout(() => {
      if (shouldError) {
        reject(new Error('Unable to fetch equipment data'));
        return;
      }

      resolve(mockEquipmentRows(200));
    }, 500);
  });

export const useEquipmentRows = () => {
  const shouldError = useQueryErrorToggle();

  const query = useQuery({
    queryKey: ['equipment-rows', { shouldError }],
    queryFn: () => fetchEquipmentRows(shouldError),
    staleTime: 60_000
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch
  };
};
