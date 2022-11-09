import { useState } from "react";

export default function CheckList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskEdit
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}
function TaskEdit({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <label>
      <input
        type="checkbox"
        checked={task.checked}
        onChange={(e) => {
          onChange({
            ...task,
            checked: e.target.checked,
          });
        }}
      />
      {isEditing ? (
        <input type="text"
          value={task.name}
          onChange={(e) => {
            onChange({
              ...task,
              name: e.target.value,
            });
          }}
        />
      ) : (
        <span>{task.name}</span>
      )}
      <button
        className="bg-blue-200 rounded-lg"
        onClick={() => setIsEditing(!isEditing)}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        className="bg-red-200 rounded-lg"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </label>
  );
}
