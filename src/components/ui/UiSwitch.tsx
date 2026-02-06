import { FormControlLabel, Switch } from '@mui/material';
import type { ReactNode } from 'react';

interface UiSwitchProps {
  label?: ReactNode;
  checked: boolean;
  disabled?: boolean;
  name?: string;
  onChange?: (checked: boolean) => void;
  'data-testid'?: string;
}

const UiSwitch = ({ label, checked, disabled, name, onChange, 'data-testid': dataTestId }: UiSwitchProps) => (
  <FormControlLabel
    control={
      <Switch
        checked={checked}
        disabled={disabled}
        name={name}
        onChange={(_, isChecked) => onChange?.(isChecked)}
        color="primary"
      />
    }
    label={label}
    data-testid={dataTestId}
  />
);

export default UiSwitch;
