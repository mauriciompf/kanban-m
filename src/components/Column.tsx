import Button from "../utils/Button";
import TaskDetails from "./TaskDetails";

export default function Column() {
  return (
    <div className="w-[18.75rem] border-solid border border-black  p-4 m-8">
      <div className="border-b border-black pb-4 ">
        <input
          type="text"
          placeholder="New Column"
          className="bg-transparent w-full"
        />
      </div>

      <Button
        className={"border-b border-black w-full py-2"}
        label="+ add new task"
      />

      <TaskDetails />
    </div>
  );
}
