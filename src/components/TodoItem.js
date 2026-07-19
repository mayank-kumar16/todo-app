const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div className="bg-gray-700 p-4 mb-2 rounded flex justify-between">
      <div className="">
        <h3 className="text-lg font-semibold">{todo.text}</h3>
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
