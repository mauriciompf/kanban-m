import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const Draggable = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id: id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div className="grid gap-2" style={style} ref={setNodeRef} {...attributes} {...listeners}>
      {children}
    </div>
  );
};

export default Draggable;
