import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  IS_DONE,
} from "../Constants/Constant";

const initialState = {
  tasks: [{ id: Math.random(), title: "task1", status: false }],
};

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((ele) => ele.id !== action.payload),
      };
    case IS_DONE:
      return {
        ...state,
        tasks: state.tasks.map((ele) =>
          ele.id === action.payload ? { ...ele, status: !ele.status } : ele
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((ele) =>
          ele.id === action.payload.id
            ? { ...ele, title: action.payload.title }
            : ele
        ),
      };

    default:
      return state;
  }
};
export default TaskReducer;
