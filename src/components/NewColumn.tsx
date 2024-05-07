import { useState } from "react";
import Column from "./Column.tsx";
import NewColumnButton from "../utils/NewColumnButton.tsx";

const NewColumn = () => {
  const [columns, setColumns] = useState<boolean>(true);

  const addColumn = () => {
    setColumns(false);
  };

  return (
    <>{columns ? <NewColumnButton addColumn={addColumn} /> : <Column />}</>
  );
};
export default NewColumn;
