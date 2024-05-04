import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Button from "../utils/Button";

interface Props {
  setShowTaskDetails: (value: boolean) => void;
  addItem: (title: string, priority: string) => void;
  setTitleValue: (value: string) => void;
  titleValue: string;
  setPriority: (value: string) => void;
  priority: string;
}

export default function TaskDetails({
  setShowTaskDetails,
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
          <div className="flex items-center gap-1 cursor-pointer">
            <label className="cursor-pointer" htmlFor="pri-a">
              A
            </label>
            <input
              type="radio"
              className="cursor-pointer"
              name="priority"
              id="pri-a"
              value="A"
              onChange={handlePriorityChange}
            />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <label className="cursor-pointer" htmlFor="pri-aa">
              AA
            </label>
            <input
              type="radio"
              className="cursor-pointer"
              name="priority"
              id="pri-aa"
              value="AA"
              onChange={handlePriorityChange}
            />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <label className="cursor-pointer" htmlFor="pri-aaa">
              AAA
            </label>
            <input
              type="radio"
              className="cursor-pointer"
              name="priority"
              id="pri-aaa"
              value="AAA"
              onChange={handlePriorityChange}
            />
          </div>
          {/* <Button className={"bg-red-600 px-2 py-1 rounded-lg"} label="AAA" />
          <Button className={"bg-yellow-400 px-2 py-1 rounded-lg"} label="AA" />
          <Button className={"bg-green-400 px-2 py-1 rounded-lg"} label="A" /> */}
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
