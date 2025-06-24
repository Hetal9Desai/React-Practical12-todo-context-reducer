import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { TaskListWrapper } from "./components/Task/TaskListWrapper";
import { AddEditTaskWrapper } from "./components/Task/AddEditTaskWrapper";
import NotFound from "./components/NotFound/NotFound";
import { useTheme } from "./context/ThemeContext";

const App: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <BrowserRouter>
      <Navbar />

      <main
        className={`min-vh-100 p-3 ${
          darkMode ? "bg-dark text-light" : "bg-light text-dark"
        }`}
      >
        <Routes>
          <Route path="/" element={<TaskListWrapper />} />
          <Route path="/add-task" element={<AddEditTaskWrapper />} />
          <Route path="/edit-task/:taskId" element={<AddEditTaskWrapper />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
