import { useState } from "react";
import Button from "../utils/Button";
import TaskDetails from "./TaskDetails";
import ItemCard from "./ItemCard";
import { NewItem } from "../utils/types";
import { useDroppable } from "@dnd-kit/core";

export default function Column() {
  const [items, setItems] = useState<NewItem[]>([]);
  const [showTaskDetails, setShowTaskDetails] = useState<boolean>(false);
  const [titleValue, setTitleValue] = useState<string>("");
  const [priority, setPriority] = useState<string>("");

  const handleNewTaskButton = (): void => setShowTaskDetails(true);

  const addItem = (title: string, priority: string): void => {
    setItems([{ title, priority }, ...items]);
  };

  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    // Column Box
    <div
      ref={setNodeRef}
      style={style}
      className="w-[18.75rem] border-solid border border-black p-4"
    >
      {/* Column title */}
      <div className="border-b border-black pb-4 ">
        <input
          type="text"
          placeholder="New Column"
          className="bg-transparent w-full"
        />
      </div>

      {/* Add new task */}
      <Button
        onClick={handleNewTaskButton}
        className={"border-b border-black w-full py-2"}
        label="+ add new task"
      />

      {/* Task Details */}
      {showTaskDetails && (
        <TaskDetails
          setShowTaskDetails={setShowTaskDetails}
          addItem={addItem}
          setTitleValue={setTitleValue}
          titleValue={titleValue}
          setPriority={setPriority}
          priority={priority}
        />
      )}

      {/* Tasks list */}
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
