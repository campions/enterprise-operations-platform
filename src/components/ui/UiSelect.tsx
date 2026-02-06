import { FormControl, FormHelperText, InputLabel, Select } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import type { ReactNode } from 'react';
import { useId } from 'react';

type UiSelectSize = 'small' | 'medium';

interface UiSelectProps {
  label: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: SelectChangeEvent<string>) => void;
  children: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  name?: string;
  size?: UiSelectSize;
  helperText?: string;
  error?: boolean;
  id?: string;
  'data-testid'?: string;
}

const UiSelect = ({
  label,
  value,
  defaultValue,
  onChange,
  children,
  fullWidth = true,
  disabled,
  name,
  size = 'medium',
  helperText,
  error,
  id,
  'data-testid': dataTestId
}: UiSelectProps) => {
  const autoId = useId();
  const baseId = id ?? autoId;
  const labelId = `${baseId}-label`;
  const selectId = `${baseId}-input`;

  return (
    <FormControl fullWidth={fullWidth} disabled={disabled} data-testid={dataTestId} size={size} error={error}>
      <InputLabel id={labelId} htmlFor={selectId}>
        {label}
      </InputLabel>
      <Select
        labelId={labelId}
        id={selectId}
        label={label}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        name={name}
        size={size}
      >
        {children}
      </Select>
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </FormControl>
  );
};

export default UiSelect;
