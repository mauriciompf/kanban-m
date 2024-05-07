import React, { useState } from "react";
import Button from "../utils/Button";

import TaskDetails from "./TaskDetails";
import ItemCard from "./ItemCard";

import { NewItem } from "../utils/types";

export default function Column() {
  const [items, setItems] = useState<NewItem[]>([]);
  const [showTaskDetails, setShowTaskDetails] = useState<boolean>(false);
  const [titleValue, setTitleValue] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [draggedItem, setDraggedItem] = useState<NewItem | null>(null);

  const handleNewTaskButton = (): void => setShowTaskDetails(true);

  const addItem = (title: string, priority: string): void => {
    setItems([{ title, priority }, ...items]);
  };

  const handleOnDrag = (e: React.DragEvent, item: NewItem) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(item));
    setDraggedItem(item);
  };

  const handleOnDrop = (e: React.DragEvent) => {
    e.preventDefault();

    const data = e.dataTransfer.getData("text/plain");
    const item = JSON.parse(data);
    setItems([...items, item]);
    setDraggedItem(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    // Column Box
    <div
      className="w-[18.75rem] border-solid border border-black p-4"
      onDragOver={handleDragOver}
      onDrop={(e) => handleOnDrop(e)}
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
          onDragStart={(e: React.DragEvent) => handleOnDrag(e, item)}
          key={index}
          titleValue={item.title}
          priority={item.priority}
        />
      ))}
    </div>
  );
}
