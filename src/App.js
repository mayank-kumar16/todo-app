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

  const updateTodos = (event, newTodo) => {
    event.preventDefault();

    if (newTodo.trim() === '') {
      return;
    }

    setInputValue('');

    setTodos((prevTodos) => {
      const newTodoObject = {
        ID: prevTodos.length + 1,
        text: newTodo,
        completed: false,
      };

      return [...prevTodos, newTodoObject];
    });
  };

  console.log(todosData);

  return (
    <div className="App">
      <TodoForm
        inputValue={inputValue}
        onInputChange={handleInputChange}
        addTodo={updateTodos}
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
