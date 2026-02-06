import { Box, Stack, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import type { ReactNode } from 'react';
import UiButton from '../UiButton';

interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  retryLabel?: string;
  actions?: ReactNode;
}

const ErrorState = ({
  title = 'Something went wrong',
  message,
  onRetry,
  retryLabel = 'Retry',
  actions
}: ErrorStateProps) => (
  <Box
    data-testid="error-state"
    sx={{
      border: (theme) => `1px solid ${theme.palette.error.light}`,
      borderRadius: 2,
      p: 3,
      bgcolor: (theme) =>
        theme.palette.mode === 'light' ? 'rgba(244, 63, 94, 0.08)' : 'rgba(244, 63, 94, 0.18)'
    }}
  >
    <Stack spacing={1} alignItems="flex-start">
      <Stack direction="row" spacing={1} alignItems="center">
        <ErrorOutlineIcon color="error" />
        <Typography variant="subtitle1" fontWeight={600}>
          {title}
        </Typography>
      </Stack>
      <Typography variant="body2" color="text.secondary">
        {message}
      </Typography>
      <Stack direction="row" spacing={1} mt={1}>
        {onRetry ? (
          <UiButton variant="contained" color="primary" onClick={onRetry} size="small">
            {retryLabel}
          </UiButton>
        ) : null}
        {actions}
      </Stack>
    </Stack>
  </Box>
);

export default ErrorState;
