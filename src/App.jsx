import { useReducer } from 'react';
import AddTask from './AddTask';
import CheckList from './CheckList';
import './App.css';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
const App = () => {
    const [tasks, dispatch] = useReducer(reducer, initialState);
    function handleAddTask(text) {
      dispatch({
        type: 'add',
        id: nextId++,
        text: text,
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
      <h1 style={{background: 'blue', color: 'white'}}>todo list</h1>
      <AddTask
        onAddTask={handleAddTask}
      />
      <CheckList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
      />
      <span>
    <Glyphicon glyph="search"/>
 </span>
    </>
  );
  };

function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      return [...state, {
        id: action.id,
        text: action.text,
        done: false
      }];
      
    }
    case 'delete': {
      return state.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

  let nextId = 3;
const initialState = [
  { id: 0, text: 'javascript', done: true },
  { id: 1, text: 'html', done: false },
  { id: 2, text: 'php', done: false }
];
export default App;
 