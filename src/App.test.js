import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('renders TODO list', () => {
  let taskList = [
    {title:'varrer a casa', done: false}, 
    {title:'lavar roupa', done: false}
  ];

  render(<App todoList={taskList}/>);
  
  expect(screen.getByText("TODO")).toBeInTheDocument();
  expect(screen.getByText("varrer a casa")).toBeInTheDocument();
  expect(screen.getByText("lavar roupa")).toBeInTheDocument();
});

test('should move a task to Done list', () => {
  let taskList = [
    {title:'varrer a casa', done: false}, 
    {title:'lavar roupa', done: false}
  ];
  render(<App todoList={taskList}/>);
  
  expect(screen.getByText("varrer a casa")).toBeInTheDocument();
  expect(screen.getByText("lavar roupa")).toBeInTheDocument();

  userEvent.click(screen.getByText('varrer a casa'));
  
  const doneList = screen.getByTestId('done-list');

  expect(doneList).toHaveTextContent('varrer a casa');
});

test('should move a task to Done list', () => {
  let taskList = [
    {title:'varrer a casa', done: true}, 
    {title:'lavar roupa', done: false}
  ];
  render(<App todoList={taskList}/>);

  const todoList = screen.getByTestId('todo-list');
  expect(todoList).toHaveTextContent('lavar roupa');

  const doneList = screen.getByTestId('done-list');
  expect(doneList).toHaveTextContent('varrer a casa');

  userEvent.click(screen.getByText('varrer a casa'));
  
  const todoListUpdated = screen.getByTestId('todo-list');
  expect(todoList).toHaveTextContent('varrer a casa');
  expect(todoList).toHaveTextContent('lavar roupa');

  const doneListUpdated = screen.getByTestId('done-list');
  expect(doneList).not.toHaveTextContent('varrer a casa');
});
