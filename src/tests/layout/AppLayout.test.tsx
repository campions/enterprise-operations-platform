import { screen } from '@testing-library/react';
import AppLayout from '@/components/layout/AppLayout';
import { renderWithProviders } from '@/tests/testUtils';

jest.mock('next/router', () => ({
  useRouter: () => ({ pathname: '/dashboard' })
}));

describe('AppLayout', () => {
  it('renders navigation links and page title', () => {
    renderWithProviders(
      <AppLayout title="Test View">
        <div>Test Content</div>
      </AppLayout>
    );

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Test View' })).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
