import { Alert, Snackbar } from '@mui/material';
import type { AlertColor } from '@mui/material/Alert';
import type { SnackbarCloseReason } from '@mui/material/Snackbar';
import type { ReactNode, SyntheticEvent } from 'react';

interface UiToastProps {
  open: boolean;
  message: string;
  severity?: AlertColor;
  autoHideDuration?: number;
  onClose?: (event?: Event | SyntheticEvent, reason?: SnackbarCloseReason) => void;
  action?: ReactNode;
  'data-testid'?: string;
}

const UiToast = ({
  open,
  message,
  severity = 'success',
  autoHideDuration = 4000,
  onClose,
  action,
  'data-testid': dataTestId
}: UiToastProps) => (
  <Snackbar
    open={open}
    autoHideDuration={autoHideDuration}
    onClose={onClose}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    data-testid={dataTestId}
  >
    <Alert onClose={onClose} severity={severity} variant="filled" action={action} sx={{ width: '100%' }}>
      {message}
    </Alert>
  </Snackbar>
);

export default UiToast;
