import { useState } from 'react';

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
      className={
        todo.completed
          ? 'bg-lime-900 p-4 mb-2 rounded flex justify-between'
          : 'bg-gray-700 p-4 mb-2 rounded flex justify-between'
      }
    >
      <div className="flex justify-start">
        <div>
          <input
            className="w-[30px] h-[30px] mr-4"
            type="checkbox"
            checked={todo.completed}
            onChange={() => {
              completeTodo(todo.id);
            }}
          />
        </div>

        {editingId === todo.id ? (
          <>
            <input
              className="text-black"
              value={editedText}
              onChange={handleEditedTextChange}
            />
            <button
              className="bg-lime-600 text-white p-2"
              onClick={() => {
                saveEditedTodo(todo.id, editedText);
              }}
            >
              save
            </button>
          </>
        ) : (
          <h3
            className={
              todo.completed
                ? 'text-lg text-green-500 line-through font-semibold'
                : 'text-lg font-semibold'
            }
          >
            {todo.text}
          </h3>
        )}

        {editingId !== todo.id && (
          <button
            className="bg-black p-3 text-white text-sm ml-2"
            onClick={() => {
              editTodo(todo.id);
            }}
          >
            Edit
          </button>
        )}
      </div>
      <button
        className="bg-black text-white text-sm p-4 "
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
