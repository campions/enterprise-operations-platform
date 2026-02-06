import { Typography } from '@mui/material';
import UiCard from './UiCard';

interface StatCardProps {
  label: string;
  value: number;
  unit?: string;
  delta?: number;
}

const formatValue = (value: number, unit?: string) => {
  const base = Number.isInteger(value) ? value.toLocaleString() : value.toFixed(1);

  if (!unit) {
    return base;
  }

  return unit.trim() === '%' ? `${value.toFixed(1)}%` : `${base} ${unit}`;
};

const formatDelta = (delta: number, unit?: string) => {
  if (delta === 0) {
    return '0';
  }

  const prefix = delta > 0 ? '+' : '-';
  const magnitude = Math.abs(delta);
  const valueText = Number.isInteger(delta) ? magnitude.toString() : magnitude.toFixed(1);
  const unitSuffix = unit?.trim() === '%' ? '%' : unit ? ` ${unit}` : '';

  return `${prefix}${valueText}${unitSuffix}`;
};

const StatCard = ({ label, value, unit, delta }: StatCardProps) => {
  const normalizedLabel = label.toLowerCase().replace(/\\s+/g, '-');
  const showDelta = typeof delta === 'number';
  const deltaColor = !showDelta || delta === 0 ? 'text.secondary' : delta > 0 ? 'success.main' : 'error.main';

  return (
    <UiCard data-testid={`stat-card-${normalizedLabel}`} padding={2.5}>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {label}
      </Typography>
      <Typography variant="h5" fontWeight={600}>
        {formatValue(value, unit)}
      </Typography>
      {showDelta ? (
        <Typography variant="caption" sx={{ color: deltaColor }}>
          Δ {formatDelta(delta, unit)}
        </Typography>
      ) : null}
    </UiCard>
  );
};

export default StatCard;
