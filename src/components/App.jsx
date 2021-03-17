import React, { useState } from "react";
import Todoitem from "./Todoitem";

import Inputtext from "./Input";

function App() {
  const [list, addlist] = useState([]);

  function handlesubmit(event, inputtext) {
    addlist(function (prevValue) {
      return [...prevValue, inputtext];
    });

    event.preventDefault();
  }

  function delet(id) {
    addlist(function (prevValue) {
      return prevValue.filter(function (item, index) {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <Inputtext onsubmit={handlesubmit} />
      </div>
      <div>
        <ul>
          {list.map(function (eachlist, index) {
            return (
              <Todoitem
                item={eachlist}
                key={index}
                id={index}
                onClick={delet}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
