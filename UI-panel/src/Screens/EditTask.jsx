import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTaskById, updateTask } from "../Services/task";
import { Link } from "react-router-dom";

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [assignTo, setAssignTo] = useState('');
  const [status, setStatus] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    loadTask();
  }, [id]);

  const loadTask = async () => {
    try {
      const task = await getTaskById(id);
      console.log("Fetched task:", task); // ✅ Add this line
      setAssignTo(task.assignTo);
      setStatus(task.status);
      setDueDate(task.dueDate);
      setPriority(task.priority);
      setDescription(task.description);
    } catch (error) {
      console.error("Failed to load task", error);
    }
  };

  const onUpdate = async () => {
    try {
      const updatedTask = {
        assignTo,
        status,
        dueDate,
        priority,
        description,
      };
      await updateTask(id, updatedTask);
      alert("Task updated successfully!");
      navigate("/task");
    } catch (error) {
      alert("Failed to update task.");
      console.error(error);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Edit Task</h2>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="mb-3">
            <label>Assign To</label>
            <input value={assignTo} onChange={(e) => setAssignTo(e.target.value)} type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label>Status</label>
            <input value={status} onChange={(e) => setStatus(e.target.value)} type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label>Due Date</label>
            <input value={dueDate} onChange={(e) => setDueDate(e.target.value)} type="date" className="form-control" />
          </div>
          <div className="mb-3">
            <label>Priority</label>
            <input value={priority} onChange={(e) => setPriority(e.target.value)} type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label>Description</label>
            <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" />
          </div>
          <button className="btn btn-success mt-2" onClick={onUpdate}>
            Update Task
          </button>
          <Link className="btn btn-danger ms-3" to="/task">
            Cancel
          </Link><br />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default EditTask;



