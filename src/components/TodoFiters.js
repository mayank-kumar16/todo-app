import { FILTER_TXT } from '../data/todoFilterValues';

const TodoFilters = ({ filter, handleFilterSelect }) => {
  return (
    <div className="w-5/12 mx-auto flex justify-center gap-4 my-4">
      <button
        className={
          filter === FILTER_TXT.ALL
            ? 'bg-black text-white px-5 py-3'
            : 'bg-slate-400 text-white px-5 py-3'
        }
        onClick={() => handleFilterSelect(FILTER_TXT.ALL)}
      >
        {FILTER_TXT.ALL}
      </button>
      <button
        className={
          filter === FILTER_TXT.ACTIVE
            ? 'bg-black text-white px-5 py-3'
            : 'bg-slate-400 text-white px-5 py-3'
        }
        onClick={() => handleFilterSelect(FILTER_TXT.ACTIVE)}
      >
        {FILTER_TXT.ACTIVE}
      </button>
      <button
        className={
          filter === FILTER_TXT.COMPLETED
            ? 'bg-black text-white px-5 py-3'
            : 'bg-slate-400 text-white px-5 py-3'
        }
        onClick={() => handleFilterSelect(FILTER_TXT.COMPLETED)}
      >
        {FILTER_TXT.COMPLETED}
      </button>
    </div>
  );
};

export default TodoFilters;
