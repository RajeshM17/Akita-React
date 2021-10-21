// import * as React from 'react';
// import { TodosPageComponent } from '../src/components/TodosPage';
// import { render, cleanup, fireEvent } from 'react-testing-library';
// import { todosQuery } from '../src/state/todos.query';

// afterEach(cleanup);

// describe('<TodosPageComponent />', () => {

//   it('It should render todos', () => {
//     const { container } = render(<TodosPageComponent />);
//     const addTodoInput = container.querySelector('input');
//     addTodoInput.value = 'Learn Akita';
//     const btn = container.querySelector('[type="submit"]');
//     fireEvent(
//       btn,
//       new MouseEvent('click', {
//         bubbles: true,
//         cancelable: true,
//       }),
//     )
//     expect(container.querySelectorAll('li').length).toEqual(1);
//   });
// });
