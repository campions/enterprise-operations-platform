import { act, screen } from '@testing-library/react';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import DashboardPage from '@/pages/dashboard';
import { renderWithProviders } from '@/tests/testUtils';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

const mockedUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;

const advanceTimers = async (ms: number) => {
  await act(async () => {
    jest.advanceTimersByTime(ms);
  });
};

describe('DashboardPage', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    mockedUseRouter.mockReturnValue({
      pathname: '/dashboard',
      query: {},
      push: jest.fn(),
      prefetch: jest.fn(),
      replace: jest.fn()
    } as unknown as NextRouter);
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it('shows loading state before rendering KPI cards and table data', async () => {
    renderWithProviders(<DashboardPage />);
    expect(screen.getByText(/Loading KPIs/i)).toBeInTheDocument();

    await advanceTimers(600);

    const kpiCards = await screen.findAllByTestId(/kpi-card-/i);
    expect(kpiCards).toHaveLength(6);
    expect(await screen.findByText('Conveyor System 1')).toBeInTheDocument();
  });
});
