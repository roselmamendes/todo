import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>TODO</h1>
      <div className="TodoList">
        {props.todoList.map((task, index) => 
        <li key={index}>
          <input type="checkbox" name={`task ${index}`}/>
          <label for={`task ${index}`}> {task}</label>
        </li>
        )}
      </div>
    </div>
  );
}

export default App;
