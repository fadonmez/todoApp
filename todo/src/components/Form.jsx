import React, { useState } from "react";
import cn from "classnames";

export default function Form({ kaydet, isUpdate, task, updateTask }) {
  const [taskTitle, setTaskTitle] = useState(task ? task.title : "");
  const [taskDescription, setTaskDescription] = useState(task ? task.desc : "");
  const [updateMode, setUpdateMode] = useState(false);
  const [empty, setEmpty] = useState(false);
  const alertText = empty
    ? "flex items-center justify-center p-4 bg-white mt-4 w-full rounded"
    : "hidden";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      updateTask(task.id, taskTitle, taskDescription);
    } else {
      if (taskTitle === "" || taskDescription === "") {
        setEmpty(true);
        return;
      } else {
        kaydet(taskTitle, taskDescription);
        setEmpty(false);
      }
    }
    setTaskTitle("");
    setTaskDescription("");
  };
  return (
    <div>
      {isUpdate ? (
        <div className="flex flex-col items-center justify-center bg-blue-500  p-8 rounded-b-xl">
          {" "}
          <h1 className="text-2xl font-bold">Lütfen görev düzenleyiniz</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-center justify-center w-full "
          >
            <label className="text-2xl font-bold" htmlFor="gorev">
              Başlığı düzenleyin
            </label>
            <input
              type="text"
              id="gorev"
              placeholder="Görev"
              className="px-4 py-2 rounded w-full"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <label className="text-2xl font-bold" htmlFor="yap">
              Yapılacakları düzenleyin
            </label>
            <textarea
              type="text"
              id="yap"
              placeholder="Yapılacaklar"
              className="px-4 py-2 rounded w-full"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
            <button className="px-4 py-2 rounded-lg w-full bg-green-500">
              Gönder
            </button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center bg-red-500 w-1/3 m-auto p-8 rounded-b-xl">
          <h1 className="text-3xl font-bold">Lütfen görev giriniz</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-start justify-center w-full "
          >
            <label className="text-2xl font-bold" htmlFor="gorev">
              Başlık
            </label>
            <input
              type="text"
              id="gorev"
              placeholder="Görev"
              className="px-4 py-2 rounded w-full"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <label className="text-2xl font-bold" htmlFor="yap">
              Yapılacaklar
            </label>
            <textarea
              type="text"
              id="yap"
              placeholder="Yapılacaklar"
              className="px-4 py-2 rounded w-full"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
            <button className="px-4 py-2 rounded-lg w-full bg-green-500 hover:opacity-90 transition-opacity">
              Gönder
            </button>
          </form>
          <div className={alertText}>
            <h3 className=" text-red-800 text-2xl">
              Lütfen boş alan bırakmayınız !
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
