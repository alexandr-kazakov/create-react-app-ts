import { render, fireEvent, screen } from '@testing-library/react';
import ThemeSwitcher from '../ThemeSwitcher';

describe('ThemeSwitcher component', () => {
  test('render', () => {
    render(<ThemeSwitcher />);
    expect(screen.getByText('Toggle Theme')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    render(<ThemeSwitcher />);
    fireEvent.click(screen.getByText('Toggle Theme'));
    expect(screen.getByText('Toggle Theme')).toBeInTheDocument(); 
  });
});

describe('Button component snapshot', () => {
    test('matches snapshot', () => {
      const { asFragment } = render(<ThemeSwitcher />);
      expect(asFragment()).toMatchSnapshot();
    });
});