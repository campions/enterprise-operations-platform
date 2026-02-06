import { Card, CardContent } from '@mui/material';
import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material/styles';

interface UiCardProps {
  children: ReactNode;
  elevation?: number;
  padding?: number | string;
  outlined?: boolean;
  sx?: SxProps<Theme>;
  'data-testid'?: string;
}

const UiCard = ({ children, elevation = 0, padding = 3, outlined = true, sx, 'data-testid': dataTestId }: UiCardProps) => {
  const baseStyles: SxProps<Theme> = {
    borderRadius: 2,
    border: outlined ? (theme) => `1px solid ${theme.palette.divider}` : 'none',
    backgroundColor: 'background.paper'
  };

  const mergedSx: SxProps<Theme> = Array.isArray(sx)
    ? [baseStyles, ...sx]
    : sx
      ? [baseStyles, sx]
      : [baseStyles];

  return (
    <Card elevation={elevation} data-testid={dataTestId} sx={mergedSx}>
      <CardContent sx={{ p: padding }}>{children}</CardContent>
    </Card>
  );
};

export default UiCard;
