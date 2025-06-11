import { useState } from "react";
import { addTask } from "../Services/task";
import { Link } from "react-router-dom";

function CreateTask() {
  const [assignTo, setAssignTo] = useState('');
  const [status, setStatus] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');

  const onRegister = async () => {
    try {
      const task = {
        assignTo,
        status,
        dueDate,
        priority,
        description,
      };
      const result = await addTask(task);
      alert("Task added successfully!");
      // Reset form
      setAssignTo('');
      setStatus('');
      setDueDate('');
      setPriority('');
      setDescription('');
    } catch (error) {
      console.error("Failed to add task:", error);
      alert("Failed to add task.");
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Add Task</h2>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="mb-3">
            <label>Assign To</label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              type="text"
              placeholder="User1"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="form-control"
            >
              <option value="">-- Select Status --</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Due Date</label>
            <input
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              type="date"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="form-control"
            >
              <option value="">-- Select Priority --</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Description</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="Task details"
              className="form-control"
            />
          </div>

          <button className="btn btn-success mt-2" onClick={onRegister}>
            Save
          </button>
        <Link className="btn btn-danger ms-3" to="/">
          Cancle
        </Link><br />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default CreateTask;
