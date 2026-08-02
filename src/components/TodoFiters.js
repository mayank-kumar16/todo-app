import { FaList, FaRegCircle, FaCheckCircle } from 'react-icons/fa';
import { FILTER_TXT } from '../data/todoFilterValues';

const TodoFilters = ({ filter, handleFilterSelect }) => {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-wrap justify-center gap-4 rounded-2xl bg-white p-6 shadow-lg">
      <button
        className={`flex items-center gap-2 rounded-xl px-5 py-3 font-medium transition ${
          filter === FILTER_TXT.ALL
            ? 'bg-indigo-600 text-white shadow-md'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        }`}
        onClick={() => handleFilterSelect(FILTER_TXT.ALL)}
      >
        <FaList />
        {FILTER_TXT.ALL}
      </button>

      <button
        className={`flex items-center gap-2 rounded-xl px-5 py-3 font-medium transition ${
          filter === FILTER_TXT.ACTIVE
            ? 'bg-indigo-600 text-white shadow-md'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        }`}
        onClick={() => handleFilterSelect(FILTER_TXT.ACTIVE)}
      >
        <FaRegCircle />
        {FILTER_TXT.ACTIVE}
      </button>

      <button
        className={`flex items-center gap-2 rounded-xl px-5 py-3 font-medium transition ${
          filter === FILTER_TXT.COMPLETED
            ? 'bg-indigo-600 text-white shadow-md'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        }`}
        onClick={() => handleFilterSelect(FILTER_TXT.COMPLETED)}
      >
        <FaCheckCircle />
        {FILTER_TXT.COMPLETED}
      </button>
    </div>
  );
};

export default TodoFilters;
