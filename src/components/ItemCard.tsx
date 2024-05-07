import Button from "../utils/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default function ItemCard({
  titleValue,
  priority,
  onDragStart,
}: {
  titleValue: string;
  priority: string;
  onDragStart: any;
}) {
  return (
    <div
      className="flex items-center justify-between border border-black mt-4 p-4"
      draggable
      onDragStart={onDragStart}
    >
      <div className="grid">
        <p>{titleValue}</p>
        {priority && <p>priority: {priority}</p>}
      </div>

      <Button label={<FontAwesomeIcon icon={faEllipsisVertical} />} />
    </div>
  );
}
