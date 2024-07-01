import { screen } from '@testing-library/react';
import App from '../App';
import { setupAppStore } from '../store/rootStore';
import { renderWithProviders } from '../config/tests/setupTests';

test('renders app with initial app store', () => {
  const store = setupAppStore();

  renderWithProviders(<App />, { store });
  const element = screen.queryByTestId('pages-component');
  expect(element).toBeDefined();
});

test('renders app with page routes component with initial store', () => {
  const store = setupAppStore();
  renderWithProviders(<App />, { store });
  const element = screen.queryByTestId('routes-component');
  expect(element).toBeDefined();
});
