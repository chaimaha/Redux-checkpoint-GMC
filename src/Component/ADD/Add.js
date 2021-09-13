import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_task } from "../../JS/Actions/Actions";

const Add = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  return (
    <div>
      <input onChange={(e) => setTitle(e.target.value)} />
      <button
        onClick={() => {
          dispatch(
            add_task({ id: Math.random(), title: title, status: false })
          );
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default Add;
