import { useState, useEffect } from 'react';


const API_BASE = "http://localhost:3001";


function App() {
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");


  useEffect(() => {
       GetTodos();
  }, [])

  const GetTodos = () => {
    fetch(API_BASE + "/todos")
    .then(res => res.json())
    .then(data => setTodos(data))
    .catch(err => console.error("Error: ", err));
  }
  return (
    <div className="App">
      <h1>Welcome, Somesh</h1>
      <h4>Your Tasks</h4>
      <div className="todos">
        <div className="todo">
          <div className="checkbox"></div>
          <div className="text">Get the bread</div>
          <div className="delete-todo">x</div>
          <div className="todo is-complete"></div>
          <div className="text">Get the milk</div>
          <div className="delete-todo">x</div>
        </div>
      </div>
    </div>
  );
}

export default App;
