import { FaClipboardList } from 'react-icons/fa';
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
    <div className="mx-auto mt-8 w-full max-w-3xl rounded-2xl bg-white p-10 text-center shadow-lg">
      <div className="mb-5 inline-flex rounded-full bg-indigo-100 p-5">
        <FaClipboardList className="text-5xl text-indigo-600" />
      </div>

      <h3 className="text-2xl font-bold text-slate-800">No Todos Yet</h3>

      <p className="mt-3 text-slate-500">
        Add your first task above to get started.
      </p>
    </div>
  ) : (
    <div className="mx-auto mt-8 w-full max-w-3xl rounded-2xl bg-white p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">Your Tasks</h2>

        <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
          {todos.length} {todos.length === 1 ? 'Task' : 'Tasks'}
        </span>
      </div>

      <div className="space-y-4">
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
    </div>
  );
};

export default TodoList;
