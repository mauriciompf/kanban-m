import { useState } from "react";
import Button from "../utils/Button";
import TaskDetails from "./TaskDetails";

import ItemCard from "./ItemCard";

export default function Column() {
  const [items, setItems] = useState<string[]>([]);
  const [showTaskDetails, setShowTaskDetails] = useState<boolean>(false);
  const [titleValue, setTitleValue] = useState<string>("");

  const handleNewTaskButton = (): void => setShowTaskDetails(true);

  const addItem = (title: string): void => setItems([title, ...items]);

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

      {showTaskDetails && (
        <TaskDetails
          setShowTaskDetails={setShowTaskDetails}
          addItem={addItem}
          setTitleValue={setTitleValue}
          titleValue={titleValue}
        />
      )}

      {items.map((item, index) => (
        <ItemCard key={index} titleValue={item} />
      ))}
    </div>
  );
}
