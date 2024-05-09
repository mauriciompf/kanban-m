import Button from "../utils/Button";
import { useDraggable } from "@dnd-kit/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default function ItemCard({
  titleValue,
  priority,
}: {
  titleValue: string;
  priority: string;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="flex items-center justify-between border border-black mt-4 p-4"
    >
      <div className="grid">
        <p>{titleValue}</p>
        {priority && <p>priority: {priority}</p>}
      </div>

      <Button label={<FontAwesomeIcon icon={faEllipsisVertical} />} />
    </div>
  );
}
