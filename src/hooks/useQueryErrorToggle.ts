import { useRouter } from 'next/router';

export const useQueryErrorToggle = () => {
  const router = useRouter();
  const errorFlag = router.query?.error;
  return errorFlag === '1';
};
