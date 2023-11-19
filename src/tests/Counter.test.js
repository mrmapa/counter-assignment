import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';
import '@testing-library/jest-dom'

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counter = screen.getByText(/Counter/i);
  expect(counter).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(screen.getByTestId("count")).toHaveTextContent("0")
});

test('clicking + increments the count', () => {
  expect(screen.getByTestId("count")).toHaveTextContent("0")
  fireEvent.click(screen.getByRole('button', {name: "+"}))
  expect(screen.getByTestId("count")).toHaveTextContent("1")
  fireEvent.click(screen.getByRole('button', {name: "+"}))
  expect(screen.getByTestId("count")).toHaveTextContent("2")
  fireEvent.click(screen.getByRole('button', {name: "+"}))
  expect(screen.getByTestId("count")).toHaveTextContent("3")
});

test('clicking - decrements the count', () => {
  expect(screen.getByTestId("count")).toHaveTextContent("0")
  fireEvent.click(screen.getByRole('button', {name: "-"}))
  expect(screen.getByTestId("count")).toHaveTextContent("-1")
  fireEvent.click(screen.getByRole('button', {name: "-"}))
  expect(screen.getByTestId("count")).toHaveTextContent("-2")
  fireEvent.click(screen.getByRole('button', {name: "-"}))
  expect(screen.getByTestId("count")).toHaveTextContent("-3")
});
