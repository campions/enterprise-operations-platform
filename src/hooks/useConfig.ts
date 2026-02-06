import { useQuery } from '@tanstack/react-query';
import { defaultConfigState } from '@/data/mockData';
import type { ConfigFormState } from '@/data/types';
import { useQueryErrorToggle } from './useQueryErrorToggle';

const fetchConfig = (shouldError: boolean) =>
  new Promise<ConfigFormState>((resolve, reject) => {
    setTimeout(() => {
      if (shouldError) {
        reject(new Error('Failed to load configuration'));
        return;
      }

      resolve(defaultConfigState);
    }, 300);
  });

export const useConfig = () => {
  const shouldError = useQueryErrorToggle();

  const query = useQuery({
    queryKey: ['config', { shouldError }],
    queryFn: () => fetchConfig(shouldError),
    staleTime: 120_000
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch
  };
};
