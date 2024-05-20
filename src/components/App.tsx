import { useState } from "react";
import Column from "./Column.tsx";

export default function App() {
  const [columns, setColumns] = useState<any[]>([]);
  const addColumn = () => {
    setColumns((columns: any) => [...columns, <Column />]);
  };

  return (
    <main className="m-4 bg-blue-100 p-2">
      <button onClick={addColumn} className="border mb-5 border-black p-2">
        Add new Column +
      </button>

      <div className="flex gap-8">
        {columns.map((column, index) => (
          <div key={index}>{column}</div>
        ))}
      </div>
    </main>
  );
}
