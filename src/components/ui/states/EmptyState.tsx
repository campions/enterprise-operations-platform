import { Box, Stack, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import type { ReactNode } from 'react';

interface EmptyStateProps {
  title?: string;
  message: string;
  icon?: ReactNode;
  actions?: ReactNode;
}

const EmptyState = ({
  title = 'Nothing to show',
  message,
  icon = <InfoOutlinedIcon fontSize="large" color="disabled" />,
  actions
}: EmptyStateProps) => (
  <Box
    data-testid="empty-state"
    sx={{
      border: (theme) => `1px dashed ${theme.palette.divider}`,
      borderRadius: 2,
      p: 4,
      textAlign: 'center'
    }}
  >
    <Stack spacing={1} alignItems="center">
      <Box color="text.disabled">{icon}</Box>
      {title ? (
        <Typography variant="subtitle1" fontWeight={600}>
          {title}
        </Typography>
      ) : null}
      <Typography variant="body2" color="text.secondary">
        {message}
      </Typography>
      {actions ? <Box mt={1}>{actions}</Box> : null}
    </Stack>
  </Box>
);

export default EmptyState;
