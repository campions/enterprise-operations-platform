export const formatPercentage = (value: number) => `${value.toFixed(1)}%`;

export const formatStatus = (status: string) => status.replace(/^[a-z]/, (char) => char.toUpperCase());

export const formatTimestamp = (isoDate: string) =>
  new Date(isoDate).toLocaleString('en-US', {
    timeZone: 'UTC',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
