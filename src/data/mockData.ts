import type { ConfigFormState, EquipmentRow, KpiMetric } from './types';

const KPI_SOURCE: KpiMetric[] = [
  { id: 'throughput', label: 'Total Throughput', value: 12875, delta: 4.3, unit: 'units' },
  { id: 'alarms', label: 'Active Alarms', value: 11, delta: -2 },
  { id: 'uptime', label: 'Uptime', value: 99.2, delta: 0.6, unit: '%' },
  { id: 'handover', label: 'Handover Notes', value: 21, delta: 3 },
  { id: 'workorders', label: 'Open Work Orders', value: 34, delta: -5 },
  { id: 'sla', label: 'SLA Compliance', value: 97.1, delta: 0.4, unit: '%' }
];

const EQUIPMENT_NAMES = [
  'Conveyor System',
  'Packaging Line',
  'Quality Scanner',
  'Assembly Robot',
  'Cooling Tower',
  'Mix Tank',
  'Boiler Pump',
  'Sensor Array',
  'Crane Module',
  'Inspection Drone'
];

const LOCATIONS = ['Plant A', 'Plant B', 'Plant C', 'Plant D', 'Plant E'];

const STATUS_SEQUENCE: EquipmentRow['status'][] = ['online', 'online', 'degraded', 'maintenance', 'offline'];

export const mockKpis = (): KpiMetric[] => KPI_SOURCE.map((metric) => ({ ...metric }));

export const mockEquipmentRows = (count: number): EquipmentRow[] => {
  const rows: EquipmentRow[] = [];
  const startTimestamp = Date.UTC(2025, 0, 1, 8, 0, 0); // Jan 1, 2025 08:00 UTC

  for (let index = 0; index < count; index += 1) {
    const status = STATUS_SEQUENCE[index % STATUS_SEQUENCE.length];
    const equipmentName = EQUIPMENT_NAMES[index % EQUIPMENT_NAMES.length];
    const location = LOCATIONS[index % LOCATIONS.length];
    const updatedAt = new Date(startTimestamp + index * 15 * 60 * 1000).toISOString(); // every 15 minutes
    const score = 55 + (index % 45); // cycles 55-99

    rows.push({
      id: `EQ-${(index + 1).toString().padStart(4, '0')}`,
      name: `${equipmentName} ${Math.floor(index / EQUIPMENT_NAMES.length) + 1}`,
      status,
      location: `${location} · Bay ${(index % 6) + 1}`,
      updatedAt,
      score
    });
  }

  return rows;
};

export const defaultConfigState: ConfigFormState = {
  siteName: 'Enterprise Ops Hub',
  language: 'en',
  refreshInterval: 60,
  enableAlerts: true,
  threshold: 90
};
