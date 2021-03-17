import React, { useState } from "react";

function Inputtext(props) {
  const [inputtext, setinputtext] = useState("");
  function handlechange(event) {
    let val = event.target.value;
    setinputtext(val);
  }

  return (
    <form
      onSubmit={function (event) {
        props.onsubmit(event, inputtext);
        setinputtext("");
      }}
    >
      <input onChange={handlechange} type="text" value={inputtext} />
      <button type="submit">
        <span>Add</span>
      </button>
    </form>
  );
}

export default Inputtext;
