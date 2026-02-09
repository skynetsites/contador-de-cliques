import { useState } from 'react';

const Contador = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm text-center">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        Contador de Cliques
      </h1>

      <div className="bg-slate-100 rounded-xl py-6 px-4 mb-6">
        <span className="text-6xl font-bold text-slate-800">
          {count}
        </span>
      </div>

      <button
        onClick={() => setCount(count + 1)}
        className="w-full bg-indigo-500 hover:bg-fuchsia-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      >
        Clique aqui
      </button>
    </div>
  );
};

export default Contador;