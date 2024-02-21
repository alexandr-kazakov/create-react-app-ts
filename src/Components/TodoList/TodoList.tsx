import { useEffect, useState } from "react";
import Button from "../Button/Button";


type Todo = {
    id: number;
    title: string;
}

const apiUrl: string = 'https://jsonplaceholder.typicode.com/todos';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState<string>('');


    useEffect(() => {
        const storedTodosString = localStorage.getItem('todos');
        if (storedTodosString !== null) {
            const storedTodos = JSON.parse(storedTodosString);

            if (storedTodos && storedTodos.length > 0) {
                setTodos(storedTodos);
            } else {
                fetch(apiUrl)
                .then(response => response.json())
                .then(data => setTodos(data.slice(0, 10)))
                .catch(error => console.error('Error fetching data:', error));
            }
        }
    }, []);

    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos]);
      

    const handleAddTodo = () => {
        if(inputValue.trim() !== '') {
            setTodos([...todos, {id: todos.length + 1, title: inputValue}]);
            setInputValue('');
        }
    }

    const handleDeleteTodo = (id: number) => {
   
        const updatedTodos = todos.filter(todo => todo.id !== id);

        if(!updatedTodos.length) {
            console.log('todos', todos)
            localStorage.removeItem('todos');
        }
        setTodos(updatedTodos);
    }

    const handleClearTodos = () => {
        localStorage.removeItem('todos');
        setTodos([]);
    }

    return (
        <div className="todo-list">
            <div className="mb-10">
                <input className="dark:bg-black dark:text-white border border-slate-400 h-12 pl-2 pr-2" type="text" value={inputValue} onChange={event => setInputValue(event.target.value)} placeholder="Enter your task"></input>
                <Button onClick={handleAddTodo} className="bg-primary text-white pl-8 pr-8 pt-3 pb-3" text="Add"></Button>
            </div>

            <table className="table-auto border-collapse border border-slate-400 max-w-5xl w-full mb-10">
                <thead>
                    <tr>
                    <th className="border border-slate-300">Info</th>
                    <th className="border border-slate-300">Nav</th>
                    </tr>
                </thead>
                <tbody>

                {todos.map((todo, index) => (
                        <tr key={index}>
                        <td className="border border-slate-300 p-2"><span className="mr-5">{todo.title}</span></td>
                        <td className="border border-slate-300">                       
                        <Button onClick={() => handleDeleteTodo(todo.id)} className="bg-primary text-white pl-6 pr-6 pt-1 pb-1" text="Delete" testId={`delete-button-${todo.id}`} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

             <Button onClick={handleClearTodos} className="bg-primary text-white pl-8 pr-8 pt-3 pb-3" text="Clear list"></Button>
        </div>
    )
}

export default TodoList;

