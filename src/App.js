import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import { Footer } from './components/Footer';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [element, setElement] = useState({});
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : "light";
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme} />
      <AddTask tasks={tasks} setTasks={setTasks} element={element} setElement={setElement} />
      <ShowTask tasks={tasks} setTasks={setTasks} element={element} setElement={setElement} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
