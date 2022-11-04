import { useReducer } from 'react';
import AddTask from './AddTask';
import CheckList from './CheckList';
import './App.css'
let nextId = 2;
const initialTasks = [
  { id: 0, text: 'javascript', done: false },
  { id: 1, text: 'html', done: false },
 
];
function reducer(tasks, action) {
  switch (action.type) {
    case 'add': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'edit': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'delete': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function App() {
  const [tasks, dispatch] = useReducer(
    reducer,
    initialTasks
  );

  function handleAddTask(text) {
    dispatch({
      type: 'add',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'edit',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'delete',
      id: taskId
    });
  }

  return (
    <>
      <h1 className="bg-pink-400 text-white p-5 rounded-xl">TODO LIST</h1>
      <AddTask
        onAddTask={handleAddTask}
      />
      <CheckList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

