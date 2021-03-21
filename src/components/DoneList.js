function DoneList(props){
    return (
        <div data-testid="done-list" className="DoneList">
          <b>Done</b>
          {props.taskList.map((task, index) =>
              (task.done &&
                (<li key={index}>
                  <input type="checkbox" id={index} name={`task${index}`} onChange={props.handleChange} checked/>
                  <label htmlFor={index}> {task.title}</label>
                </li>)
              )
          )}
      </div>
    );
}

export default DoneList;