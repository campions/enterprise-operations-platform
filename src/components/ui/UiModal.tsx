import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import type { DialogProps } from '@mui/material/Dialog';
import { useId } from 'react';
import type { ReactNode } from 'react';

interface UiModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  actions?: ReactNode;
  'data-testid'?: string;
}

const UiModal = ({ open, onClose, title, children, actions, 'data-testid': dataTestId }: UiModalProps) => {
  const dialogId = useId();
  const titleId = title ? `${dialogId}-title` : undefined;
  const contentId = `${dialogId}-content`;

  const handleClose: NonNullable<DialogProps['onClose']> = (_, reason) => {
    if (!reason || reason === 'escapeKeyDown' || reason === 'backdropClick') {
      onClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      aria-labelledby={titleId}
      aria-describedby={contentId}
      data-testid={dataTestId}
    >
      {title ? <DialogTitle id={titleId}>{title}</DialogTitle> : null}
      <DialogContent dividers id={contentId}>
        {children}
      </DialogContent>
      {actions ? <DialogActions>{actions}</DialogActions> : null}
    </Dialog>
  );
};

export default UiModal;
