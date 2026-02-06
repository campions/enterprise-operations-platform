import TextField from '@mui/material/TextField';
import { useId } from 'react';
import type { ChangeEvent } from 'react';

type InputType = 'text' | 'number' | 'email' | 'password';

type UiInputSize = 'small' | 'medium';

interface UiInputProps {
  label: string;
  value?: string | number;
  defaultValue?: string | number;
  type?: InputType;
  helperText?: string;
  error?: boolean;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: UiInputSize;
  name?: string;
  id?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  'data-testid'?: string;
}

const UiInput = ({
  label,
  value,
  defaultValue,
  type = 'text',
  helperText,
  error,
  placeholder,
  required,
  disabled,
  fullWidth = true,
  size = 'medium',
  name,
  id,
  onChange,
  'data-testid': dataTestId
}: UiInputProps) => {
  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <TextField
      id={inputId}
      label={label}
      value={value}
      defaultValue={defaultValue}
      type={type}
      helperText={helperText}
      error={error}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      fullWidth={fullWidth}
      size={size}
      name={name}
      onChange={onChange}
      data-testid={dataTestId}
    />
  );
};

export default UiInput;
