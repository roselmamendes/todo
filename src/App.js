import React, { useState } from 'react';
import './App.css';

function App(props){
  const [taskList, setTaskList] = useState(props.todoList);

  function handleChange(event){
    let copyTaskList = [...taskList];
    
    const taskDone = copyTaskList[event.target.id].done;

    copyTaskList[event.target.id].done = !taskDone;
    
    setTaskList(copyTaskList);
  }

  return (
    <div className="App">
      <h1>TODO</h1>
      <div className="TodoList">
        {taskList.map((task, index) =>( 
          !task.done &&
            (<li key={index}>
              <input type="checkbox" id={index} name={`task${index}`} onChange={handleChange}/>
              <label for={index}> {task.title}</label>
            </li>))
        )
        }
      </div>
      <div data-testid="done-list" className="DoneList">
          <h2>Done</h2>
          {taskList.map((task, index) =>
              (task.done &&
                (<li key={index}>
                  {task.title}
                </li>)
              )
          )}
      </div>
    </div>
  );
}

export default App;
