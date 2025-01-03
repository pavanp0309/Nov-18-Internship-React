import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";
import TaskFilter from "./TaskFilter";
import api from "../services/api";
import { toast } from "react-toastify";
import TaskItem from "./TaskItem";

const TaskMangement = () => {
  // state for mangaging the tasks filter toggeling etc
  const [tasks, setTasks] = useState([]);

  // fetching the Data Form the Servers
  useEffect(() => {
    api
      .get("/tasks")
      .then(({ data }) => setTasks(data))
      .catch((err) => toast.error("error in fecthing the data"));

    // cleanup phase
    return () => {};
  }, [tasks]); //reterive the data only once from the server and at newtask updates at initial Load

  // function to create The Task
  let addTask = (text, priority) => {
    console.log(text, priority);
    let newtask = { text, completed: false, priority };
    api
      .post("/tasks", newtask)
      .then(({ data }) => {
        setTasks([...tasks, data]);
        toast.success("newTask added to ur List😁");
      })
      .catch((err) => toast.error("failed to add the Newtask"));
  };

  // function to edit The task
  let editTask = (id,text,priority) => {
     console.log(id,text,priority)
     const editedTask={ text, completed: false, priority };
     api.put(`/tasks/${id}`,editedTask)
     .then(({ data }) => {
      setTasks(tasks.map(task=>task.id===id?data:task));
      toast.success("Edited task in ur List😁");
     })
     .catch((err) => toast.error("failed to edit the Newtask"));
  };
  // function to delete the task
  let deleteTask = (id) => {
    console.log(id)
    api.delete(`/tasks/${id}`)
    .then(() => {
      setTasks(tasks.filter(task=>task.id!==id));
      toast.success("delted task in ur List😁");
     })
     .catch((err) => toast.error("failed to delete the task"));
  };
  // function to filter the task

  // function to search the task

  return (
    <div className="container my-2 p-2">
      {/* Search Functionality start */}
      <div className="search-functionality ">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-8 col-lg-8">
            <SearchBar />
          </div>
          <div className="col-12 col-sm-4 col-md-4 col-lg-4">
            <TaskFilter />
          </div>
        </div>
      </div>
      {/* search functionality end */}
      <TaskForm onaddTask={addTask} />

      {/* displaying the Tasks fetched From Database and tasks added or edited or filtered */}
      <ul className="list-group ">
        {tasks.map((task) => (
          <TaskItem
           task={task}
           oneditTask={editTask}
           ondeleteTask={deleteTask}
            />
        ))}
      </ul>
    </div>
  );
};

export default TaskMangement;
