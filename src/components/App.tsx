import { DndContext } from "@dnd-kit/core";
import NewColumn from "./NewColumn.tsx";

export default function App() {
  return (
    <DndContext>
      <main className="m-8 flex gap-4 items-start">
        <NewColumn />
      </main>
    </DndContext>
  );
}
