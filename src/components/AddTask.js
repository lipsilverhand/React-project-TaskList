import { useState } from "react";

export const AddTask = ({tasks, setTasks, element, setElement}) => {
  const [process, setProcess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (process === '') {
      return; 
    }

    if (element.id) {
      const date = new Date();
      const updateTask = tasks.map((task) => (
        task.id === element.id ? {id: element.id, name: element.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`, complete: process === 'true'} : task
      ));
      setTasks(updateTask);
      setElement({});
      setProcess('');
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(), 
        name: event.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
        complete: process === 'true'
      };
      setTasks([...tasks, newTask]);
      setElement({});
      setProcess(''); 
    }
  };

  return (
    <section className="addTask">
        <form onSubmit={handleSubmit} className="addForm" action="">
            <input type="text" name="task" placeholder="Add new task here..." autoComplete="off" value={element.name || ""} onChange={event => setElement({...element, name: event.target.value})}/>
            <select className="process" onChange={(event) => setProcess(event.target.value)} value={process}>
              <option value="">Select</option>
              <option value="false">On processing</option>
              <option value="true">Completed</option>
            </select>
            <button type="submit" disabled={process === ''}>{element.id ? "Update" : "Add"}</button>
        </form>
    </section>
  )
};
