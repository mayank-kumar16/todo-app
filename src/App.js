import { useState } from 'react';
import TodoForm from './components/TodoForm';
import { todosData } from './data/todosData';
import TodoList from './components/TodoList';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(todosData);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = (newTodo) => {
    if (newTodo.trim() === '') {
      return;
    }

    setInputValue('');

    setTodos((prevTodos) => {
      const newTodoObject = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
      };

      return [...prevTodos, newTodoObject];
    });
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  return (
    <div className="App">
      <TodoForm
        inputValue={inputValue}
        onInputChange={handleInputChange}
        addTodo={handleAddTodo}
      />
      <TodoList todos={todos} deleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;
