import { useState, useEffect } from "react";

export const ShowTask = ({tasks, setTasks, element, setElement, theme}) => {
    const [show, setShow] = useState(true);
    const [none, setNone] = useState(true);

    function handleUpdate(id) {
        setElement(tasks.find(task => task.id === id));
    };

    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id != id));
    };

    useEffect(() => {
        setNone(tasks.length === 0);
    }, [tasks]);

    return (
        <section className={`showTask ${theme}`}>
            <div className={`head ${theme}`}>
                <div className={`text ${theme}`}>
                    <div className={`title ${theme}`}>Todo</div>
                    <span className={`counter ${theme}`}>{tasks.length}</span>
                </div>
                <div className={`sbutton ${theme}`}>
                    <button onClick={() => setShow(!show)} className={none ? "toggle_none" : "toggle_visible"}>{show ? <i class="bi bi-caret-up-fill"></i> : <i class="bi bi-caret-down-fill"></i>}</button>
                    <button onClick={() => setTasks([])} className="clearButton">Clear All</button>
                </div>
            </div>
            <ul className={`tasks ${theme}`}>
                {show && tasks.map((task) => (
                    <li key={task.id} className={task.complete ? "completed" : "incomplete"}>
                        <p>
                            <span>{task.name}</span>
                            <span>{task.time}</span>
                        </p>
                        <div className="icon">
                            <i onClick={() => handleUpdate(task.id)} className="bi bi-pencil-square"></i>
                            <i onClick={() => handleDelete(task.id)} className="bi bi-trash-fill"></i>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};


