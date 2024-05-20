import { useState } from "react";
import Column from "./Column.tsx";

export default function App() {
  const [showTaskEdit, setShowTaskEdit] = useState<boolean>(false);
  const [tasks, setTasks] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("");
  const [columns, setColumns] = useState<any[]>([]);

  const handleShowEdit = () => {
    setShowTaskEdit(!showTaskEdit);
  };

  const handleChangeTask = (e: any) => {
    const value = e.target.value;
    setTitle(value);
  };

  const addTask = () => {
    setShowTaskEdit(false);
    setTasks((tasks) => [title, ...tasks]);
  };

  const ColumnMarkup = (
    <Column className="grid gap-4 border-black border p-2 w-[200px]">
      {/* Add new task */}
      <div>
        <input type="text" placeholder="New Column" />
        <button className="border border-black p-2" onClick={handleShowEdit}>
          Add new task +
        </button>
      </div>

      {/* Details task*/}
      {showTaskEdit && (
        <div className="flex gap-2 items-center justify-between">
          <input type="text" onChange={handleChangeTask} className="w-full" />
          <button onClick={addTask}>Add</button>
        </div>
      )}

      {/* Card task*/}
      {tasks.map((task, index) => (
        <div key={index} className="border border-black p-2">
          {task}
        </div>
      ))}
    </Column>
  );

  const addColumn = () => {
    setColumns((columns: any) => [...columns, ColumnMarkup]);
  };

  return (
    <main className="m-4 bg-blue-100 p-2">
      <button onClick={addColumn} className="border border-black p-2">
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
