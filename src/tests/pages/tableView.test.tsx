import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import TableViewPage from '@/pages/table-view';
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

describe('TableViewPage', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    mockedUseRouter.mockReturnValue({
      pathname: '/table-view',
      query: {},
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn()
    } as unknown as NextRouter);
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it('filters equipment rows via the table filter input', async () => {
    renderWithProviders(<TableViewPage />);

    await advanceTimers(600);

    const table = await screen.findByTestId('operations-table');
    expect(table).toBeInTheDocument();
    expect(screen.getByText('Packaging Line 1')).toBeInTheDocument();

    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const filterInput = screen.getByLabelText('Filter results');
    await user.clear(filterInput);
    await user.type(filterInput, 'Conveyor System 1');

    await waitFor(() => expect(screen.queryByText('Packaging Line 1')).not.toBeInTheDocument());
    expect(screen.getByText('Conveyor System 1')).toBeInTheDocument();
  });
});
