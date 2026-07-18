const TodoList = ({ todos }) => {
  return (
    <div className="bg-gray-500 p-4 w-5/12 mt-6 mx-auto rounded-l text-white">
      {todos.map((todo) => {
        return (
          <div key={todo.ID} className="bg-gray-700 p-4 mb-2 rounded">
            <h3 className="text-lg font-semibold">{todo.text}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
