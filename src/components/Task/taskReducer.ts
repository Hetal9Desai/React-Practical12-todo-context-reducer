import type { Task } from "../../types/Task/types";

export type TaskAction =
  | { type: "SET_TASKS"; payload: Task[] }
  | { type: "ADD_TASK"; payload: Task }
  | { type: "REMOVE_TASK"; payload: string }
  | { type: "UPDATE_TASK"; payload: Task };

export const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "SET_TASKS":
      return action.payload;

    case "ADD_TASK":
      return [...state, action.payload];

    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);

    case "UPDATE_TASK":
      return state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );

    default:
      return state;
  }
};
