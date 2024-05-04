import { useState } from "react";
import Button from "../utils/Button";
import TaskDetails from "./TaskDetails";

import ItemCard from "./ItemCard";

export default function Column() {
  const [items, setItems] = useState<{ title: string; priority: string }[]>([]);
  const [showTaskDetails, setShowTaskDetails] = useState<boolean>(false);
  const [titleValue, setTitleValue] = useState<string>("");
  const [priority, setPriority] = useState<string>("");

  const handleNewTaskButton = (): void => setShowTaskDetails(true);

  const addItem = (title: string, priority: string): void => {
    setItems([{ title, priority }, ...items]);
  };

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
          showTaskDetails
          addItem={addItem}
          setTitleValue={setTitleValue}
          titleValue={titleValue}
          setPriority={setPriority}
          priority={priority}
        />
      )}

      {items.map((item, index) => (
        <ItemCard
          key={index}
          titleValue={item.title}
          priority={item.priority}
        />
      ))}
    </div>
  );
}
