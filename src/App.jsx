import { useEffect, useReducer } from "react";
import AddTask from "./AddTask";
import CheckList from "./CheckList";
import axios from "axios";
import "./App.css";
function reducer(tasks, action) {
  switch (action.type) {
    case "add":
      return [...tasks, action.payload];

    case "edit":
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });

    case "delete":
      return tasks.filter((t) => t.id !== action.id);

    case "read":
      return [...action.payload];
    default:
      throw Error("Unknown action: " + action.type);
  }
}

export default function App() {
  const [tasks, dispatch] = useReducer(reducer, []);

  async function handleAddTask(text) {
    try {
      const response = await axios.post(
        `https://6369eab1c07d8f936d8e529d.mockapi.io/API/Todo`,
        { name: text, checked: false }
      );
      dispatch({
        type: "add",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function handleEditTask(task) {
    try {
      const response = await axios.put(
        `https://6369eab1c07d8f936d8e529d.mockapi.io/API/Todo/` + task.id,
        task
      );
      dispatch({
        type: "edit",
        task: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  

  async function handleDeleteTask(id) {
    try {
      await axios.delete(
        `https://6369eab1c07d8f936d8e529d.mockapi.io/API/Todo/` + id
      );
      dispatch({
        type: "delete",
        id,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://6369eab1c07d8f936d8e529d.mockapi.io/API/Todo`
        );
        dispatch({ type: "read", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <h1 className="bg-pink-400 text-white p-5 rounded-xl">TODO LIST</h1>
      <AddTask onAddTask={handleAddTask} />
      <CheckList
        tasks={tasks}
        onChangeTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
