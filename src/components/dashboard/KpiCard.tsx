import { Box, Stack, Typography } from '@mui/material';
import UiCard from '@/components/ui/UiCard';

interface KpiCardProps {
  label: string;
  value: number;
  delta?: number;
  unit?: string;
}

const formatValue = (value: number, unit?: string) => {
  if (unit?.trim() === '%') {
    return `${value.toFixed(1)}%`;
  }

  const formatted = Number.isInteger(value) ? value.toLocaleString() : value.toFixed(1);
  return unit ? `${formatted} ${unit}` : formatted;
};

const KpiCard = ({ label, value, delta, unit }: KpiCardProps) => {
  const showDelta = typeof delta === 'number';
  const deltaValue = delta ?? 0;
  const deltaPrefix = deltaValue > 0 ? '+' : deltaValue < 0 ? '-' : '';
  const deltaColor = deltaValue === 0 ? 'text.disabled' : deltaValue > 0 ? 'success.main' : 'error.main';
  const formattedDelta = showDelta
    ? `${deltaPrefix}${Math.abs(deltaValue).toFixed(unit?.trim() === '%' ? 1 : 1)}${
        unit?.trim() === '%' ? '%' : ''
      }`
    : '';

  return (
    <UiCard data-testid={`kpi-card-${label.toLowerCase().replace(/\s+/g, '-')}`} padding={3}>
      <Stack spacing={1}>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="h4" fontWeight={600}>
          {formatValue(value, unit)}
        </Typography>
        {showDelta ? (
          <Box component="span" sx={{ fontSize: 12, color: deltaColor, fontWeight: 600 }}>
            {formattedDelta}
          </Box>
        ) : null}
      </Stack>
    </UiCard>
  );
};

export default KpiCard;
