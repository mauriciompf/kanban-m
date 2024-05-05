import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Button from "../utils/Button";
import Priorities from "./Priorities";

import { TaskDetailsProps } from "../utils/types";

export default function TaskDetails({
  setShowTaskDetails,
  addItem,
  setTitleValue,
  titleValue,
  setPriority,
  priority,
}: TaskDetailsProps) {
  // Handle add item (task)
  const handleAddItem = () => {
    addItem(titleValue, priority);
    setShowTaskDetails(false);

    // Reset title and priority
    setTitleValue("");
    setPriority("");
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setTitleValue(e.target.value);

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
          <Priorities setPriority={setPriority} priority={priority} />
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
