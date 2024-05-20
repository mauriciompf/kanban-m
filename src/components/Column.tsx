import { useState } from "react";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  rectIntersection,
} from "@dnd-kit/core";
import Draggable from "./Draggable";
import Droppable from "./Droppable";

const Column = () => {
  const [showTaskEdit, setShowTaskEdit] = useState<boolean>(false);
  const [tasks, setTasks] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("");
  const handleShowEdit = () => {
    setShowTaskEdit(!showTaskEdit);
  };

  const handleChangeTask = (e: any) => {
    const value = e.target.value;
    setTitle(value);
  };

  const addTask = () => {
    setShowTaskEdit(false);
    setTasks((tasks) => [title, ...tasks]);
  };

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const sensors = useSensors(mouseSensor, touchSensor);

  const handleDragEnd = (e: any) => {
    console.log("kk");
  };

  return (
    <DndContext
      collisionDetection={rectIntersection}
      sensors={sensors}
      onDragEnd={(e) => handleDragEnd}
    >
      <Droppable>
        <div className="grid gap-4 border-black border p-2 w-[200px]">
          {/* Add new task */}
          <div>
            <input type="text" placeholder="New Column" />
            <button
              className="border border-black p-2"
              onClick={handleShowEdit}
            >
              Add new task +
            </button>
          </div>

          {/* Details task*/}
          {showTaskEdit && (
            <div className="flex gap-2 items-center justify-between">
              <input
                type="text"
                onChange={handleChangeTask}
                className="w-full"
              />
              <button onClick={addTask}>Add</button>
            </div>
          )}

          {/* Card task*/}
          <div>
            {tasks.map((task, index) => (
              <Draggable key={index} id={`task-${index}`}>
                <div className="border mb-2 bg-red-100 border-black p-2">
                  {task}
                </div>
              </Draggable>
            ))}
          </div>
        </div>
      </Droppable>
    </DndContext>
  );
};

export default Column;
