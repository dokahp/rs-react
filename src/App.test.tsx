import { describe, it } from 'vitest';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('It have search input', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const search = screen.getByPlaceholderText(/Enter for Search/i);
    expect(search).toBeVisible();
  });
  it('It have navigation', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
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
