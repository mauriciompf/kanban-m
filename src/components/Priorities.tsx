import { PrioritiesProps } from "../utils/types";

const Priorities = ({ setPriority, priority }: PrioritiesProps) => {
  const prioritieTags = ["A", "AA", "AAA"];

  const handlePriorityChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setPriority(e.target.value);

  return (
    <>
      {prioritieTags.map((item, index) => (
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

export default Priorities;
