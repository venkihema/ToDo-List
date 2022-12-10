import { useState } from "react";
import "./todo.css";
export function Todo() {
  const [data, setData] = useState("");
  const [todo, setTodo] = useState([]);

  const storeData = () => {
    setTodo([...todo, data]);
    setData("");
  };

  const deleteTodo = (item) => {
    const filteredTodo = todo.filter((todo) => todo !== item);
    setTodo(filteredTodo);
  };

  //   console.log("current Todos are", todo);
  return (
    <div className="main">
      <div className="content">
        <input
          type="text"
          value={data}
          className="inputdata"
          onChange={(e) => setData(e.target.value)}
        />
        &nbsp;
        <button onClick={storeData}>Add</button>
      </div>
      <div className="addedTodos">
        {todo.length === 0 ? (
          <center>
            <h1>Add Your ToDo-List Here</h1>
          </center>
        ) : (
          todo.map((item) => {
            return (
              <center key={Math.random()} className="createdTodos">
                <div>
                  <label className="tododata">{item}</label> &nbsp;
                </div>
                <div>
                  <button onClick={() => deleteTodo(item)}>Delete</button>
                </div>
              </center>
            );
          })
        )}
      </div>
    </div>
  );
}
