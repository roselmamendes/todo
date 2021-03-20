import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TODO list', () => {
  render(<App todoList={['varrer a casa', 'lavar roupa']}/>);
  
  expect(screen.getByText("TODO")).toBeInTheDocument();
  expect(screen.getByText("varrer a casa")).toBeInTheDocument();
  expect(screen.getByText("lavar roupa")).toBeInTheDocument();
});
