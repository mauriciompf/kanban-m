import { useDroppable } from "@dnd-kit/core";

const Droppable = ({ children }: { children: any }) => {
  const { setNodeRef } = useDroppable({
    id: "drop-1",
  });

  return <div ref={setNodeRef}>{children}</div>;
};

export default Droppable;
