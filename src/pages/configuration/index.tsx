import { useEffect, useMemo, useState } from 'react';
import { Box, Divider, MenuItem, Paper, Stack, Typography } from '@mui/material';
import AppLayout from '@/components/layout/AppLayout';
import UiButton from '@/components/ui/UiButton';
import UiInput from '@/components/ui/UiInput';
import UiSelect from '@/components/ui/UiSelect';
import UiSwitch from '@/components/ui/UiSwitch';
import UiToast from '@/components/ui/UiToast';
import { useConfig } from '@/hooks/useConfig';
import LoadingState from '@/components/ui/states/LoadingState';
import EmptyState from '@/components/ui/states/EmptyState';
import ErrorState from '@/components/ui/states/ErrorState';
import type { ConfigFormState } from '@/data/types';

const LANGUAGE_OPTIONS: { value: ConfigFormState['language']; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'ro', label: 'Romanian' },
  { value: 'de', label: 'German' }
];

type ConfigFormInputs = {
  siteName: string;
  language: ConfigFormState['language'];
  refreshInterval: string;
  enableAlerts: boolean;
  threshold: string;
};

type ConfigFormErrors = {
  siteName?: string;
  language?: string;
  refreshInterval?: string;
  threshold?: string;
};

const toFormInputs = (config: ConfigFormState): ConfigFormInputs => ({
  siteName: config.siteName,
  language: config.language,
  refreshInterval: String(config.refreshInterval),
  enableAlerts: config.enableAlerts,
  threshold: String(config.threshold)
});

const validateConfig = (values: ConfigFormInputs): ConfigFormErrors => {
  const errors: ConfigFormErrors = {};
  const trimmedName = values.siteName.trim();
  if (!trimmedName) {
    errors.siteName = 'Site name is required.';
  } else if (trimmedName.length < 3) {
    errors.siteName = 'Site name must be at least 3 characters.';
  }

  if (!values.language) {
    errors.language = 'Select a language.';
  }

  const refreshText = values.refreshInterval.trim();
  if (!refreshText) {
    errors.refreshInterval = 'Refresh interval is required.';
  } else if (Number.isNaN(Number(refreshText))) {
    errors.refreshInterval = 'Enter a valid number.';
  } else {
    const refreshValue = Number(refreshText);
    if (refreshValue < 5 || refreshValue > 300) {
      errors.refreshInterval = 'Use a value between 5 and 300 seconds.';
    }
  }

  const thresholdText = values.threshold.trim();
  if (!thresholdText) {
    errors.threshold = 'Threshold is required.';
  } else if (Number.isNaN(Number(thresholdText))) {
    errors.threshold = 'Enter a valid number.';
  } else {
    const thresholdValue = Number(thresholdText);
    if (thresholdValue < 0 || thresholdValue > 100) {
      errors.threshold = 'Threshold must be between 0 and 100.';
    }
  }

  return errors;
};

const ConfigurationContent = () => {
  const { data: config, isLoading, isError, refetch } = useConfig();
  const [formValues, setFormValues] = useState<ConfigFormInputs | null>(null);
  const [initialValues, setInitialValues] = useState<ConfigFormInputs | null>(null);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    if (config) {
      const inputs = toFormInputs(config);
      setFormValues(inputs);
      setInitialValues(inputs);
    }
  }, [config]);

  const errors = useMemo(() => (formValues ? validateConfig(formValues) : {}), [formValues]);
  const hasErrors = formValues ? Object.values(errors).some(Boolean) : false;

  if (isLoading) {
    return (
      <LoadingState
        title="Loading configuration"
        message="Retrieving workspace preferences…"
        skeletonCount={4}
      />
    );
  }

  if (isError) {
    return (
      <ErrorState
        message="Unable to load configuration. Remove the ?error=1 query parameter or retry."
        onRetry={refetch}
      />
    );
  }

  if (!config) {
    return <EmptyState message="No configuration data available." />;
  }

  if (!formValues || !initialValues) {
    return (
      <LoadingState
        title="Preparing configuration"
        message="Setting up default values…"
        skeletonCount={3}
      />
    );
  }

  const updateField = <K extends keyof ConfigFormInputs>(field: K, value: ConfigFormInputs[K]) => {
    setFormValues((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleCancel = () => {
    if (initialValues) {
      setFormValues({ ...initialValues });
    }
  };

  const handleSave = () => {
    if (hasErrors || !formValues) {
      return;
    }

    const normalized: ConfigFormState = {
      siteName: formValues.siteName.trim(),
      language: formValues.language,
      refreshInterval: Number(formValues.refreshInterval),
      enableAlerts: formValues.enableAlerts,
      threshold: Number(formValues.threshold)
    };

    const nextValues = toFormInputs(normalized);
    setFormValues(nextValues);
    setInitialValues(nextValues);
    setToastOpen(true);
  };

  const isSaveDisabled = hasErrors || isLoading;

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 2,
          border: (theme) => `1px solid ${theme.palette.divider}`,
          maxWidth: 720
        }}
      >
        <Typography variant="h6" mb={2}>
          Workspace Preferences
        </Typography>
        <Stack spacing={3}>
          <Box>
            <UiInput
              label="Site Name"
              value={formValues.siteName}
              onChange={(event) => updateField('siteName', event.target.value)}
              helperText={errors.siteName}
              error={Boolean(errors.siteName)}
              required
              data-testid="site-name-input"
            />
          </Box>
          <Box>
            <UiSelect
              label="Language"
              value={formValues.language}
              onChange={(event) => updateField('language', event.target.value as ConfigFormState['language'])}
              helperText={errors.language}
              error={Boolean(errors.language)}
              data-testid="language-select"
            >
              {LANGUAGE_OPTIONS.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </UiSelect>
          </Box>
          <Box>
            <UiInput
              label="Refresh Interval (seconds)"
              type="number"
              value={formValues.refreshInterval}
              onChange={(event) => updateField('refreshInterval', event.target.value)}
              helperText={errors.refreshInterval ?? 'Choose between 5 and 300 seconds.'}
              error={Boolean(errors.refreshInterval)}
              data-testid="refresh-interval-input"
            />
          </Box>
          <Box>
            <UiInput
              label="Alert Threshold (%)"
              type="number"
              value={formValues.threshold}
              onChange={(event) => updateField('threshold', event.target.value)}
              helperText={errors.threshold ?? 'Acceptable range: 0 - 100%.'}
              error={Boolean(errors.threshold)}
              data-testid="threshold-input"
            />
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            justifyContent="space-between"
            gap={2}
          >
            <Box>
              <Typography variant="subtitle2">Alert Notifications</Typography>
              <Typography variant="body2" color="text.secondary">
                Toggle proactive alerts for high-priority events.
              </Typography>
            </Box>
            <UiSwitch
              label={formValues.enableAlerts ? 'Enabled' : 'Disabled'}
              checked={formValues.enableAlerts}
              onChange={(checked) => updateField('enableAlerts', checked)}
              data-testid="alerts-switch"
            />
          </Box>
          <Divider />
          <Box display="flex" justifyContent="flex-end" gap={1}>
            <UiButton variant="outlined" onClick={handleCancel} data-testid="reset-preferences">
              Cancel
            </UiButton>
            <UiButton onClick={handleSave} disabled={isSaveDisabled} data-testid="save-preferences">
              Save
            </UiButton>
          </Box>
        </Stack>
      </Paper>
      <UiToast open={toastOpen} message="Configuration updated." onClose={() => setToastOpen(false)} />
    </>
  );
};

const ConfigurationPage = () => (
  <AppLayout title="Configuration">
    <ConfigurationContent />
  </AppLayout>
);

export default ConfigurationPage;
