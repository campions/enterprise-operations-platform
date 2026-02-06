export type KpiMetric = {
  id: string;
  label: string;
  value: number;
  delta?: number;
  unit?: string;
};

export type EquipmentStatus = 'online' | 'offline' | 'maintenance' | 'degraded';

export type EquipmentRow = {
  id: string;
  name: string;
  status: EquipmentStatus;
  location: string;
  updatedAt: string;
  score: number;
};

export type ConfigFormState = {
  siteName: string;
  language: 'en' | 'ro' | 'de';
  refreshInterval: number; // seconds
  enableAlerts: boolean;
  threshold: number;
};
