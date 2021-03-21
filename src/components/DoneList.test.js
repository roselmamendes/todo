import { render, screen } from '@testing-library/react';
import DoneList from './DoneList';

test('should show tasks done', () => {
    let taskList = [
        {title:'varrer a casa', done: true}, 
        {title:'lavar roupa', done: true},
        {title:'lavar banheiro', done: true}
    ];

    render(<DoneList taskList={taskList} handleChange={jest.fn()} />);

    expect(screen.getByText('varrer a casa')).toBeInTheDocument();
    expect(screen.getByText('lavar roupa')).toBeInTheDocument();
    expect(screen.getByText('lavar banheiro')).toBeInTheDocument();
});

test('should render an empty task list', () => {
    let taskList = [];

    render(<DoneList taskList={taskList} handleChange={jest.fn()} />);
});

test('should not show tasks not completed', () => {
    let taskList = [
        {title:'varrer a casa', done: false}
    ];

    render(<DoneList taskList={taskList} handleChange={jest.fn()} />);

    expect(screen.queryByText('varrer a casa')).not.toBeInTheDocument();
});