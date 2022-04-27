import Task from "./Task.jsx";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RecoilRoot } from 'recoil';

test('displays description of task given as prop', () => {
  // render task component
  // find the description dom node, verify it matches the description of given task
  const task = {
    id: 1,
    description: "Do the dishes"
  };

  render(
    <RecoilRoot>
      <Task task={task} />
    </RecoilRoot>
  );
  expect(screen.getByTestId('description')).toHaveTextContent("Do th dishes");
});
