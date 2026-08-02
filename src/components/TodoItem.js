import { useState } from 'react';
import { FaCheck, FaEdit, FaSave, FaTrash } from 'react-icons/fa';

const TodoItem = ({
  todo,
  deleteTodo,
  completeTodo,
  editTodo,
  editingId,
  saveEditedTodo,
}) => {
  const [editedText, setEditedText] = useState(todo.text);

  const handleEditedTextChange = (event) => {
    setEditedText(event.target.value);
  };

  return (
    <div
      className={`mb-4 flex items-center justify-between rounded-2xl p-5 shadow-md transition duration-200 hover:shadow-xl ${
        todo.completed ? 'bg-green-100' : 'bg-white'
      }`}
    >
      <div className="flex flex-1 items-center gap-4">
        <input
          className="h-6 w-6 accent-indigo-600"
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            completeTodo(todo.id);
          }}
        />

        {editingId === todo.id ? (
          <>
            <input
              className="flex-1 rounded-xl border border-gray-300 px-4 py-2 text-slate-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              value={editedText}
              onChange={handleEditedTextChange}
            />

            <button
              className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 font-medium text-white transition hover:bg-green-700"
              onClick={() => {
                saveEditedTodo(todo.id, editedText);
              }}
            >
              <FaSave />
              Save
            </button>
          </>
        ) : (
          <>
            <h3
              className={`flex-1 text-lg font-semibold ${
                todo.completed
                  ? 'text-green-700 line-through'
                  : 'text-slate-800'
              }`}
            >
              {todo.text}
            </h3>

            <button
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"
              onClick={() => {
                editTodo(todo.id);
              }}
            >
              <FaEdit />
              Edit
            </button>
          </>
        )}
      </div>

      <button
        className="ml-4 flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        <FaTrash />
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
