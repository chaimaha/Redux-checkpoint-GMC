import React from "react";
import { useDispatch } from "react-redux";
import { delete_task, is_done } from "../../JS/Actions/Actions";
import EDit from "./Edit";
import "./Task.css";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const btn_fun = () => {
    if (task.status === false) return "Undone";
    else return "Done";
  };

  return (
    <div className="task">
      <h1 className="task-title">{task.title}</h1>
      <div className="btns">
        <EDit id={task.id} />
        <button
          className="task-btn"
          onClick={() => dispatch(delete_task(task.id))}
        >
          Delete
        </button>
        <button className="task-btn" onClick={() => dispatch(is_done(task.id))}>
          {btn_fun()}
        </button>
      </div>
    </div>
  );
};

export default Task;
