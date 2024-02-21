import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
  test('renders footer with text', () => {
    render(<Footer />);
    expect(screen.getByText('© Главный одобряет')).toBeInTheDocument();
  });
});

describe('Footer component snapshot', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});