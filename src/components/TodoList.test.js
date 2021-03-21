import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

test('should show undone tasks', () => {
    let taskList = [
        {title:'varrer a casa', done: false}, 
        {title:'lavar roupa', done: false},
        {title:'lavar banheiro', done: true}
    ];

    render(<TodoList taskList={taskList} handleChange={jest.fn()} />);

    expect(screen.getByText('varrer a casa')).toBeInTheDocument();
    expect(screen.getByText('lavar roupa')).toBeInTheDocument();
    expect(screen.queryByText('lavar banheiro')).not.toBeInTheDocument();
    expect(screen.queryByText('Nada para fazer')).not.toBeInTheDocument();
});

test('should render an empty task list', () => {
    let taskList = [];

    render(<TodoList taskList={taskList} handleChange={jest.fn()} />);

    expect(screen.getByText('Nada para fazer')).toBeInTheDocument();
});

test('should not show done tasks', () => {
    let taskList = [
        {title:'varrer a casa', done: true}, 
        {title:'lavar roupa', done: true},
        {title:'lavar banheiro', done: true}
    ];

    render(<TodoList taskList={taskList} handleChange={jest.fn()} />);

    expect(screen.queryByText('varrer a casa')).not.toBeInTheDocument();
    expect(screen.queryByText('lavar roupa')).not.toBeInTheDocument();
    expect(screen.queryByText('lavar banheiro')).not.toBeInTheDocument();
    expect(screen.getByText('Nada para fazer')).toBeInTheDocument();
});