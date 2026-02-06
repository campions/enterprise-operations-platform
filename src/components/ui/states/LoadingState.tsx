import { Skeleton, Stack, Typography, Box } from '@mui/material';
import type { ReactNode } from 'react';

interface LoadingStateProps {
  title?: string;
  message?: string;
  skeletonCount?: number;
  actions?: ReactNode;
}

const LoadingState = ({
  title = 'Loading',
  message = 'Fetching the latest data…',
  skeletonCount = 3,
  actions
}: LoadingStateProps) => (
  <Box data-testid="loading-state">
    <Stack spacing={1} mb={2}>
      <Typography variant="subtitle1" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {message}
      </Typography>
    </Stack>
    <Stack spacing={1}>
      {Array.from({ length: skeletonCount }).map((_, idx) => (
        <Skeleton key={idx} variant="rectangular" height={32} animation="wave" />
      ))}
    </Stack>
    {actions ? <Box mt={2}>{actions}</Box> : null}
  </Box>
);

export default LoadingState;
