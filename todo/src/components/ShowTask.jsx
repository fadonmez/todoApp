import React, { useState } from "react";
import cn from "classnames";
import Form from "./Form";

export default function ShowTask({ task, onDelete, updateTask }) {
  const [isFinish, setIsFinish] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const handleClick = () => {
    setIsFinish(!isFinish);
  };
  const handleDelete = () => {
    onDelete(task.id);
  };
  const handleUpdate = () => {
    setIsUpdate(!isUpdate);
  };
  const taskUpdate = (id, title, desc) => {
    updateTask(id, title, desc);
    setIsUpdate(false);
  };
  return (
    <div
      className={cn(
        { "bg-green-200": isFinish, "bg-violet-200": !isFinish },
        " w-96 rounded-lg"
      )}
    >
      {isUpdate ? (
        <Form isUpdate={isUpdate} task={task} updateTask={taskUpdate} />
      ) : (
        <div className="p-8 flex flex-col gap-4 items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-600">Görev Başlığı</h1>
          <h1>{task.title}</h1>
          <h1 className="text-3xl font-bold text-gray-600">Görev Açıklaması</h1>
          <p>{task.desc}</p>
          <div className="flex gap-4">
            <button
              onClick={handleDelete}
              className="bg-red-500 px-4 py-2 rounded-md w-24 hover:opacity-75 transition-opacity"
            >
              Delete
            </button>
            <button
              onClick={handleUpdate}
              className={cn(
                "bg-blue-500 px-4 py-2 rounded-md w-24 hover:opacity-75 transition-opacity",
                {
                  "pointer-events-none": isFinish,
                }
              )}
            >
              Edit
            </button>
            <button
              onClick={handleClick}
              className={cn(
                "bg-green-500 px-4 py-2 rounded-md w-24 hover:opacity-75 transition-opacity",
                {
                  "pointer-events-none": isFinish,
                }
              )}
            >
              Finish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
