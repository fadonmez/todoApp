import React from "react";
import ShowTask from "./ShowTask";

export default function TaskList({ tasks, onDelete, updateTask }) {
  return (
    <div className="grid grid-cols-4 gap-4 place-items-center mt-12">
      {tasks.map((task) => {
        return (
          <ShowTask
            task={task}
            key={task.id}
            onDelete={onDelete}
            updateTask={updateTask}
          />
        );
      })}
    </div>
  );
}
