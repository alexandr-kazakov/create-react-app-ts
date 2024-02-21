import { render, fireEvent, screen } from '@testing-library/react';
import Button, { ButtonProps } from '../Button';

describe('Button component', () => {
  const defaultProps: ButtonProps = {
    text: 'Click me',
  };

  test('renders button with text', () => {
    render(<Button {...defaultProps} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button {...defaultProps} onClick={onClickMock} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('applies className to button', () => {
    render(<Button {...defaultProps} className="custom-class" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });
});

describe('Button component snapshot', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<Button text="Click me" />);
    expect(asFragment()).toMatchSnapshot();
  });
});