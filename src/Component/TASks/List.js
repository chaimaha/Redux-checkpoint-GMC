import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import "./Task.css";

const List = () => {
  const tasks = useSelector((state) => state.TaskReducer.tasks);
  const [status, setStatus] = useState("All");
  return (
    <div className="filter_btns">
      <div>
        <button onClick={() => setStatus("All")}>All</button>
        <button onClick={() => setStatus("Undone")}>Undone</button>
        <button onClick={() => setStatus("Done")}>Done</button>
      </div>
      {status === "Done"
        ? tasks
            .filter((ele) => ele.status === true)
            .map((ele) => (
              <div>
                <Task task={ele} />
              </div>
            ))
        : status === "Undone"
        ? tasks
            .filter((ele) => ele.status === false)
            .map((ele) => (
              <div>
                <Task task={ele} />
              </div>
            ))
        : tasks.map((ele) => (
            <div>
              <Task task={ele} />
            </div>
          ))}
    </div>
  );
};

export default List;
