function TodoList(props){
    let isEmptyTodoList = true;
    return (
        <div data-testid="todo-list" className="TodoList">
        {props.taskList.map((task, index) =>
        {
            if(!task.done){
                isEmptyTodoList = false;
                return (<li key={index}>
                    <input type="checkbox" id={index} name={`task${index}`} onChange={props.handleChange}/>
                    <label htmlFor={index}> {task.title}</label>
                </li>)
            }
            return null;
        })}
        
        {isEmptyTodoList && <p>Nada para fazer</p>}
      </div>
    );
}

export default TodoList;