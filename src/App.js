import { useState } from 'react';
import { FaClipboardList } from 'react-icons/fa';
import TodoForm from './components/TodoForm';
import { todosData } from './data/todosData';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFiters';
import { FILTER_TXT } from './data/todoFilterValues';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(todosData);
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState(FILTER_TXT.ALL);

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'completed') {
      return todo.completed;
    } else {
      return true;
    }
  });

  const handleFilterSelect = (newFilter) => {
    setFilter(newFilter);
  };

  const handleEditid = (id) => {
    setEditingId(id);
  };

  const saveEditedTodo = (id, editedText) => {
    if (editedText.trim() === '') {
      return;
    }

    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: editedText };
        }

        return todo;
      });
    });

    setEditingId(null);
  };

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

  const handleCheckboxchange = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex items-center justify-center gap-4">
          <div className="rounded-full bg-indigo-600 p-4 shadow-lg">
            <FaClipboardList className="text-3xl text-white" />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-slate-800">Todo Manager</h1>

            <p className="mt-1 text-slate-500">
              Organize your daily tasks efficiently
            </p>
          </div>
        </div>

        <TodoForm
          inputValue={inputValue}
          onInputChange={handleInputChange}
          addTodo={handleAddTodo}
        />

        <div className="mt-8">
          <TodoFilters
            handleFilterSelect={handleFilterSelect}
            filter={filter}
          />
        </div>

        <div className="mt-8">
          <TodoList
            todos={filteredTodos}
            deleteTodo={handleDeleteTodo}
            completeTodo={handleCheckboxchange}
            editTodo={handleEditid}
            editingId={editingId}
            saveEditedTodo={saveEditedTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
