import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import ConfigurationPage from '@/pages/configuration';
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

describe('ConfigurationPage', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    mockedUseRouter.mockReturnValue({
      pathname: '/configuration',
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

  it('blocks invalid submissions and shows toast on successful save', async () => {
    renderWithProviders(<ConfigurationPage />);
    await advanceTimers(400);

    const siteInput = await screen.findByLabelText(/Site Name/i);
    const saveButton = screen.getByTestId('save-preferences');
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    await user.clear(siteInput);
    await user.type(siteInput, 'ab');

    expect(saveButton).toBeDisabled();
    expect(await screen.findByText(/at least 3 characters/i)).toBeInTheDocument();

    await user.clear(siteInput);
    await user.type(siteInput, 'Enterprise Ops Center');

    expect(saveButton).not.toBeDisabled();
    await user.click(saveButton);

    expect(await screen.findByText('Configuration updated.')).toBeVisible();
  });
});
