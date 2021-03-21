import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';
import DoneList from './components/DoneList';

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
      <TodoList taskList={taskList} handleChange={handleChange}/>
      <DoneList taskList={taskList} handleChange={handleChange} />
    </div>
  );
}

export default App;
