import React from "react";
import PropTypes from "prop-types";

function UList({ id, assignTo, status, DueDate, Priority, description, onEdit, onDelete }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{assignTo}</td>
      <td>{status}</td>
      <td>{DueDate}</td>
      <td>{Priority}</td>
      <td>{description}</td>
      <td>
        <button className="btn btn-success btn-sm" onClick={() => onEdit(id)}>Edit</button>
      </td>
      <td>
        <button className="btn btn-danger btn-sm ms-2" onClick={() => onDelete(id)}>Delete</button>
      </td>
    </tr>
  );
}

// Optional: validate props
UList.propTypes = {
  id: PropTypes.number.isRequired,
  assignTo: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  DueDate: PropTypes.string,
  Priority: PropTypes.string,
  description: PropTypes.string,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UList;

