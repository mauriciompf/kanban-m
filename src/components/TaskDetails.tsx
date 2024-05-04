import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Button from "../utils/Button";
import React from "react";

interface Props {
  setShowTaskDetails: (value: boolean) => void;
  showTaskDetails: boolean;
  addItem: (title: string, priority: string) => void;
  setTitleValue: (value: string) => void;
  titleValue: string;
  setPriority: (value: string) => void;
  priority: string;
}

export default function TaskDetails({
  setShowTaskDetails,
  showTaskDetails,
  addItem,
  setTitleValue,
  titleValue,
  setPriority,
  priority,
}: Props) {
  // handle add item (task)
  const handleAddItem = () => {
    addItem(titleValue, priority);
    setShowTaskDetails(false);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setTitleValue(e.target.value);

  const handlePriorityChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setPriority(e.target.value);

  const Priorities = () => {
    const prioritiesTags = ["A", "AA", "AAA"];

    return (
      <>
        {prioritiesTags.map((item, index) => (
          <div key={index} className="flex items-center gap-1 cursor-pointer">
            <label className="cursor-pointer" htmlFor={`pri-${item}`}>
              {item}
            </label>
            <input
              type="radio"
              className="cursor-pointer"
              name="priority"
              id={`pri-${item}`}
              value={item}
              checked={priority === item}
              onChange={handlePriorityChange}
            />
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="border-black border grid gap-4 p-4 mt-6">
      <div className="border-b border-black">
        <input
          onChange={handleChangeTitle}
          type="text"
          placeholder="Title..."
          className="bg-transparent w-full"
        />
      </div>

      <textarea
        placeholder="Description..."
        className="w-full p-2 border-black border"
      ></textarea>

      <div className="flex gap-2 items-center">
        <p>Priority: </p>

        <div className="flex gap-2 ">
          <Priorities />
        </div>

        <Button
          onClick={handleAddItem}
          className={"bg-slate-500 p-1 rounded-lg font-bold w-full"}
          label={<FontAwesomeIcon icon={faCheck} />}
        />
      </div>
    </div>
  );
}
