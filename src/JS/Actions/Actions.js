import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  IS_DONE,
} from "../Constants/Constant";

export const add_task = (NEW_TASK) => {
  return {
    type: ADD_TASK,
    payload: NEW_TASK,
  };
};
export const delete_task = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
export const edit_task = (id, title) => {
  return {
    type: EDIT_TASK,
    payload: { id, title },
    // title,
  };
};
export const is_done = (id) => {
  return {
    type: IS_DONE,
    payload: id,
  };
};
