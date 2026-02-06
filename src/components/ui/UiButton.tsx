import Button from '@mui/material/Button';
import type { ReactNode } from 'react';

type UiButtonVariant = 'text' | 'contained' | 'outlined';
type UiButtonColor = 'primary' | 'secondary' | 'inherit';

type UiButtonType = 'button' | 'submit' | 'reset';

type UiButtonSize = 'small' | 'medium' | 'large';

interface UiButtonProps {
  children: ReactNode;
  variant?: UiButtonVariant;
  color?: UiButtonColor;
  disabled?: boolean;
  onClick?: () => void;
  type?: UiButtonType;
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  size?: UiButtonSize;
  'data-testid'?: string;
}

const UiButton = ({
  children,
  variant = 'contained',
  color = 'primary',
  disabled,
  onClick,
  type = 'button',
  fullWidth,
  startIcon,
  endIcon,
  size = 'medium',
  'data-testid': dataTestId
}: UiButtonProps) => (
  <Button
    variant={variant}
    color={color}
    disabled={disabled}
    onClick={onClick}
    type={type}
    fullWidth={fullWidth}
    startIcon={startIcon}
    endIcon={endIcon}
    size={size}
    data-testid={dataTestId}
  >
    {children}
  </Button>
);

export default UiButton;
