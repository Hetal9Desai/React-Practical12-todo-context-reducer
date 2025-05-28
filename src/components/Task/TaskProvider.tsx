import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  type ReactNode,
  type Dispatch,
} from "react";
import type { Task } from "../../types/Task/types";
import { taskReducer, type TaskAction } from "./taskReducer";

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

interface TaskProviderProps {
  children: ReactNode;
}

const initialTasks: Task[] = [];

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      dispatch({ type: "SET_TASKS", payload: JSON.parse(stored) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTaskContext = (): TaskContextType => {
  const ctx = useContext(TaskContext);
  if (!ctx) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return ctx;
};
