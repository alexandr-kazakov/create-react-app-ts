import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {
  test('renders header with text', () => {
    render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );
      expect(screen.getByText('React Pro')).toBeInTheDocument();
  });

  test('activates navigation link when clicked', () => {
    render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );
    const homeLink = screen.getByText('Home');
    const dashboardLink = screen.getByText('Dashboard');
    const aboutLink = screen.getByText('About');

    fireEvent.click(homeLink);
    expect(homeLink).toHaveClass('text-primary');
    expect(dashboardLink).not.toHaveClass('text-primary');
    expect(aboutLink).not.toHaveClass('text-primary');
  });
});

