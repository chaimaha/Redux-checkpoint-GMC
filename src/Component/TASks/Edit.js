import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useDispatch } from "react-redux";
import { edit_task } from "../../JS/Actions/Actions";
import "./Task.css";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function EDit({ id }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2>Edit your task</h2>
      <input onChange={(e) => setTitle(e.target.value)} />
      <button
        onClick={() => {
          dispatch(edit_task(id, title));
          handleClose();
        }}
      >
        Edit
      </button>
    </div>
  );

  return (
    <div style={{ padding: "1.8%" }}>
      <button className="task-btn" type="button" onClick={handleOpen}>
        Edit
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
