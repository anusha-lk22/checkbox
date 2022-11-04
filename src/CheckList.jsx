import { useState } from "react";

export default function CheckList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskEdit task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function TaskEdit({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskValue;
  if (isEditing) {
    taskValue = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskValue = (
      <>
        {task.text}
        <button className="bg-blue-200 rounded-lg" onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked
          });
        }}
      />
      {taskValue}
      <button className="bg-red-200 rounded-lg" onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
}
