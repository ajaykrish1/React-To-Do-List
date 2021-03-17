import React, { useState } from "react";

function Todoitem(props) {
  const [isdone, setisdone] = useState(false);

  function donetask(event) {
    setisdone(function (prevValue) {
      return !prevValue;
    });
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <li
                style={
                  isdone
                    ? {
                        fontSize: "20px",
                        textDecoration: "line-through",
                        color: "black"
                      }
                    : { fontSize: "30px", textDecoration: "none", color: "red" }
                }
                onClick={donetask}
              >
                {props.item}
              </li>
            </td>
            <td>
              <button
                style={{ fontSize: "10px" }}
                onClick={function () {
                  setisdone(function (prevValue) {
                    return !prevValue;
                  });
                  return props.onClick(props.id);
                }}
              >
                <span>Delete</span>
              </button>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Todoitem;
