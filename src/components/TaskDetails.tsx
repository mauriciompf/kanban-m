import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Button from "../utils/Button";
import React from "react";

interface Props {
  setShowItem: (value: boolean) => void;
  setShowTaskDetails: (value: boolean) => void;
  setTitleValue: (value: string) => void;
}

export default function TaskDetails({
  setShowItem,
  setShowTaskDetails,
  setTitleValue,
}: Props) {
  // handle add item (task)
  const handleAddItem = () => {
    setShowTaskDetails(false);
    setShowItem(true);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let titleValue = e.target.value;
    setTitleValue(titleValue);
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

      <textarea className="w-full p-2 border-black border"></textarea>

      <div className="flex gap-2 items-center">
        <p>Priority: </p>

        <div className="flex gap-2">
          <Button className={"bg-red-600 px-2 py-1 rounded-lg"} label="AAA" />
          <Button className={"bg-yellow-400 px-2 py-1 rounded-lg"} label="AA" />
          <Button className={"bg-green-400 px-2 py-1 rounded-lg"} label="A" />
        </div>

        <Button
          onClick={() => handleAddItem()}
          className={"bg-slate-500 p-1 rounded-lg font-bold w-full"}
          label={<FontAwesomeIcon icon={faCheck} />}
        />
      </div>
    </div>
  );
}
