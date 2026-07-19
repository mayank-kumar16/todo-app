import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="bg-gray-500 p-4 w-5/12 mt-6 mx-auto rounded-l text-white">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
};

export default TodoList;
