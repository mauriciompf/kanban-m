import Button from "../utils/Button";

export default function TaskDetails() {
  return (
    <div className="border-black border grid gap-4 p-4 mt-6">
      <div className="border-b border-black">
        <input
          type="text"
          placeholder="Title..."
          className="bg-transparent w-full"
        />
      </div>

      <textarea className="w-full p-2 border-black border"></textarea>

      <div className="flex gap-2 items-center">
        <p>Priority: </p>

        <div className="flex gap-4">
          <Button className={"bg-red-600 px-2 py-1 rounded-lg"} label="AAA" />
          <Button className={"bg-yellow-400 px-2 py-1 rounded-lg"} label="AA" />
          <Button className={"bg-green-400 px-2 py-1 rounded-lg"} label="A" />
        </div>
      </div>
    </div>
  );
}
