import { FaPlus, FaTasks } from 'react-icons/fa';

const TodoForm = ({ inputValue, onInputChange, addTodo }) => {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <form
        className="overflow-hidden rounded-2xl bg-white shadow-lg"
        onSubmit={(event) => {
          event.preventDefault();
          addTodo(inputValue);
        }}
      >
        <div className="flex">
          <div className="flex items-center px-5 text-indigo-600">
            <FaTasks className="text-xl" />
          </div>

          <input
            type="text"
            placeholder="Add a new todo..."
            className="w-full bg-transparent px-2 py-4 text-lg text-slate-700 placeholder:text-slate-400 focus:outline-none"
            value={inputValue}
            onChange={onInputChange}
          />

          <button
            type="submit"
            className="flex items-center gap-2 bg-indigo-600 px-6 py-4 font-semibold text-white transition duration-200 hover:bg-indigo-700"
          >
            <FaPlus />
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
