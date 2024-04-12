import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const Todo = () => {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const resp = await axios.get("/api/show/todos");
      setTasks(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/create/list", { firstName: inputTask });
      setInputTask("");
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteTask = async (id) => {
    try {
      await axios.delete(`/api/delete/todo/${id}`);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className="App">
        <h1>To Do List App</h1>
        <div className="center">
          <form onSubmit={onSubmitForm}>
            <label>Enter the task: </label>
            <input
              className="Input_box"
              type="text"
              value={inputTask}
              onChange={(e) => setInputTask(e.target.value)}
              placeholder="Get groceries"
            />
            <input className="alert-success" type="submit" value="Add Task" />
          </form>

          <div className="task-list">
            {tasks.map((item, index) => (
              <div key={index} className="task">
                <h2>
                  <span>{item.firstName}</span>
                  <i
                    onClick={() => onDeleteTask(item.id)}
                    class="fa-solid fa-xmark"
                    
                  ></i>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Todo;
