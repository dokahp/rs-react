import { describe, it } from 'vitest';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { setupStore } from './store/store';

const store = setupStore();

describe('App', () => {
  it('It have search input', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const search = screen.getByPlaceholderText(/Enter for Search/i);
    expect(search).toBeVisible();
  });
  it('It have navigation', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('nav');
  });
});

describe('NotFound', () => {
  it('Not Found Route', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <App />
      </MemoryRouter>
    );
    const heading = screen.getByText(/^404$/);
    expect(heading).toBeVisible();
  });
  it('It have navigation', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <App />
      </MemoryRouter>
    );
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('nav');
  });
});
