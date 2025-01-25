import React, { useState } from "react";
function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "" && !tasks.includes(task)) {
      setTasks([...tasks, task]);
      setTask("");
    } else if (tasks.includes(task)) {
      alert("This task already exists!");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleKeyPress} 
        placeholder="Enter your Tasks"
        style={{ padding: "5px", fontSize: "16px" }}
      />
      <button
        onClick={addTask}
        style={{ marginLeft: "10px", padding: "5px 10px" }}
      >
        +
      </button>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              margin: "10px 0",
              backgroundColor: "#f9f9f9",
              padding: "10px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {t}{" "}
            <button
              onClick={() => removeTask(index)}
              style={{
                marginLeft: "10px",
                color: "white",
                backgroundColor: "red",
                border: "none",
                borderRadius: "3px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
