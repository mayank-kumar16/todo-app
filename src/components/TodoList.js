import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  deleteTodo,
  completeTodo,
  editTodo,
  editingId,
  saveEditedTodo,
}) => {
  return todos.length < 1 ? (
    <div className="bg-gray-500 p-4 w-5/12 mt-6 mx-auto rounded-l text-white">
      <h3 className="text-lg font-semibold">
        No todos available, Add your first task above.
      </h3>
    </div>
  ) : (
    <div className="bg-gray-500 p-4 w-5/12 mt-6 mx-auto rounded-l text-white">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            editTodo={editTodo}
            editingId={editingId}
            saveEditedTodo={saveEditedTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
