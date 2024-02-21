import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList component', () => {
  test('renders input and add button', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText('Enter your task');
    const addButtonElement = screen.getByText('Add');
    expect(inputElement).toBeInTheDocument();
    expect(addButtonElement).toBeInTheDocument();
  });

  test('adds todo item when add button is clicked', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText('Enter your task');
    const addButtonElement = screen.getByText('Add');

    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.click(addButtonElement);

    const todoItemElement = screen.getByText('New Todo');
    expect(todoItemElement).toBeInTheDocument();
  });

  test('deletes todo item when delete button is clicked', () => {
    const fakeTodo = { id: 1, title: 'Your todo title' };
    render(<TodoList />);
    const deleteButtonElement = screen.getByTestId(`delete-button-${fakeTodo.id}`);
    fireEvent.click(deleteButtonElement);
    expect(screen.queryByText('Your todo title')).toBeNull();
  });
  

    test('clears todo list when clear button is clicked', () => {
        render(<TodoList />);
        const inputElement = screen.getByPlaceholderText('Enter your task');
        const addButtonElement = screen.getByText('Add');

        fireEvent.change(inputElement, { target: { value: 'New Todo 1' } });
        fireEvent.click(addButtonElement);
        fireEvent.change(inputElement, { target: { value: 'New Todo 2' } });
        fireEvent.click(addButtonElement);

        const clearButtonElement = screen.getByText('Clear list');
        fireEvent.click(clearButtonElement);

        // Проверяем, что нет строк с задачами
        const todoItemElements = screen.queryAllByRole('row');
        // Пропускаем первую строку (заголовок таблицы)
        expect(todoItemElements.length - 1).toBe(0);
    });
});


describe('TotoList component snapshot', () => {
    test('renders TodoList component correctly', () => {
        const { container } = render(<TodoList />);
        expect(container).toMatchSnapshot();
    });
});