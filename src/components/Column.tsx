import { useState } from "react";
import Button from "../utils/Button";
import TaskDetails from "./TaskDetails";

import ItemCard from "./ItemCard";

export default function Column() {
  const [showTaskDetails, setShowTaskDetails] = useState(false);
  const [showItem, setShowItem] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [task, setTask] = useState([]);

  const handleNewTaskButton = () => setShowTaskDetails(true);

  return (
    <div className="w-[18.75rem] border-solid border border-black p-4 m-8">
      <div className="border-b border-black pb-4 ">
        <input
          type="text"
          placeholder="New Column"
          className="bg-transparent w-full"
        />
      </div>
      <Button
        onClick={handleNewTaskButton}
        className={"border-b border-black w-full py-2"}
        label="+ add new task"
      />

      {showTaskDetails ? (
        <TaskDetails
          setShowItem={setShowItem}
          setShowTaskDetails={setShowTaskDetails}
          setTitleValue={setTitleValue}
        />
      ) : null}

      {showItem ? <ItemCard titleValue={titleValue} /> : null}
    </div>
  );
}
