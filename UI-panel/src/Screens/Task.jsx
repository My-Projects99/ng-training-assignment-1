import { useEffect, useState } from "react";
import { getTaskList, deleteTaskById } from "../Services/task"; // Make sure deleteTaskById is implemented
import UList from "../Components/TaskList";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Task() {
  const [taskList, setTaskList] = useState([]);

  const onLoadTaskList = async () => {
    try {
      const result = await getTaskList();
      setTaskList(result);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await deleteTaskById(id);
        alert("Task deleted successfully!");
        onLoadTaskList(); // Reload list after deletion
      } catch (error) {
        console.error("Failed to delete task:", error);
        alert("Failed to delete task.");
      }
    }
  };
  const navigate = useNavigate();
  const handleEdit = (id) => {
    // You can navigate to an edit screen or open a modal
    alert(`Navigate to edit page for task ID: ${id}`);
    navigate(`/EditTask/${id}`);
  };

  useEffect(() => {
    onLoadTaskList();
  }, []);

  return (
    <div>
      <center>
        <h2>Task List</h2>
      </center>

      <div className="container">
        <Link className="btn btn-success" to="/CreateTask">
          Add Task
        </Link><br />
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Assign To</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Comments</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((task) => (
              <UList
                key={task.id}
                id={task.id}
                assignTo={task.assignTo}
                status={task.status}
                DueDate={task.dueDate}
                Priority={task.priority}
                description={task.description}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Task;
