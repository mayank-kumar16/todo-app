const TodoForm = ({ inputValue, onInputChange, addTodo }) => {
  return (
    <div>
      <form
        className="flex justify-center mt-6"
        onSubmit={(event) => {
          event.preventDefault();
          addTodo(inputValue);
        }}
      >
        <input
          type="text"
          placeholder="Add a new todo"
          className="border border-gray-300 rounded-l px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-black"
          value={inputValue}
          onChange={onInputChange}
        />
        <button
          type="submit"
          className="bg-gray-700 text-white px-4 py-2 rounded-r hover:bg-black focus:outline-none focus:ring-2 focus:ring-black"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
