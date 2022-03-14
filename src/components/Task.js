import React from "react";

function Task({text, category, onDeleteTask}) {

  function handleClick() {
    onDeleteTask(text)
  }

  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button 
        onClick={handleClick}
        className="delete" 
        
      >
        X
      </button>
    </div>
  );
}

export default Task;
