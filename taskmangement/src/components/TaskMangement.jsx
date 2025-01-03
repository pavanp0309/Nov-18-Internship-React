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
  }, []); //reterive the data only once from the server at initial Load




  

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
      <TaskForm />

      {/* displaying the Tasks fetched From Database and tasks added or edited or filtered */}
      <ul className="list-group ">
        {tasks.map((task)=>(
          <TaskItem 
           task={task}
          />
        ))}
        </ul>
    </div>
  );
};

export default TaskMangement;
