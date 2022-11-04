import { useState } from "react";

const CheckList = ({ tasks, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task}
          onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  return (
<label>
      <input class="padding"
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked
          });
        }}
      />
      {task.text}&nbsp;&nbsp;&nbsp;
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
}
export default CheckList;