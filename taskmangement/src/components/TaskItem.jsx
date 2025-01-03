import { useState } from "react";

const TaskItem = ({ task,oneditTask,ondeleteTask }) => {
  const [isEditable, setIsEdiTable] = useState(false);
  let [oldtask, setOldTask] = useState(task.text);
  let [priority, setPriority] = useState(task.priority);

  function handlesave(){
    oneditTask(task.id,oldtask,priority)
    setIsEdiTable(false)
  }

  return (
    <>
      <li className="list-group-item p-2 border border-danger my-2">
        {isEditable ? (
          <>
            <div className="row">
              {/* adding items */}
              <div className="col-sm-6 col-md-8 col-lg-8">
                <input
                  type="text"
                  class="form-control"
                  placeholder="add items"
                  value={oldtask} // attaching the Form Value
                  onChange={(e) => setOldTask(e.target.value)}
                />
              </div>
              {/* periority-medium ,high,low */}
              <div className="col-sm-3 col-md-2 col-lg-2">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                  <option value="High">High</option>
                </select>
              </div>
              {/* add button */}
              <div className="col-sm-3 col-md-2 col-lg-2">
                <button className="btn btn-success" onClick={()=>handlesave()}>Save</button>
                <button className="btn btn-danger" onClick={()=>setIsEdiTable(false)}>cancel</button>
              </div>
            </div>
          </>
        ) : (
          <div className="d-flex justify-content-between align-items-center">
            <p>{task.text}</p>
            {/* container for edit and delete functionlaities */}
            <div className="edit-feature">
              <span className="text-success">{task.priority}</span>
              <button className="btn btn-outline-success mx-1 rounded" onClick={()=>setIsEdiTable(true)}> ✒</button>
              <button className="btn btn-outline-danger rounded" onClick={()=>ondeleteTask(task.id)}>⛔</button>
            </div>
          </div>
        )}
      </li>
    </>
  );
};

export default TaskItem;
