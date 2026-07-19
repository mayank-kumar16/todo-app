const TodoItem = ({ todo, deleteTodo, completeTodo }) => {
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
        <h3
          className={
            todo.completed
              ? 'text-lg text-green-500 line-through font-semibold'
              : 'text-lg font-semibold'
          }
        >
          {todo.text}
        </h3>
      </div>
      <button
        className="bg-black text-white text-sm p-4"
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
