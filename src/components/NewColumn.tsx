import { useState } from "react";
import Column from "./Column.tsx";
import NewColumnButton from "../utils/NewColumnButton.tsx";

const NewColumn = () => {
  const [columns, setColumns] = useState<JSX.Element[]>([]);

  const addColumn = () => {
    setColumns([...columns, <Column key={columns.length} />]);
  };

  return (
    <>
      {columns.map((column, index) => (
        <div key={index}>{column}</div>
      ))}

      <NewColumnButton addColumn={addColumn} />
    </>
  );
};
export default NewColumn;
