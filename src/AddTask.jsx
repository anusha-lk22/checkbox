import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  return (
    <>
      <input
        placeholder="Add New"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      &nbsp;&nbsp;&nbsp;
      <button  className="bg-orange-500" onClick={() => {
        setText('');
        onAddTask(text);
      }}>Add</button>
    </>
  )
}
