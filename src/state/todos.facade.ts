import { VISIBILITY_FILTER, Todo} from './todo.model';

const NOOP = () => {};

export class TodosFacade {
  todos: Todo[] = [];
  filter: VISIBILITY_FILTER = VISIBILITY_FILTER.SHOW_ALL;
  history = {
    hasPast: false,
    hasFuture: false,
    undo: NOOP,
    redo: NOOP
  };

  addTodo(text: string)  {  }
  deleteTodo({id})       {  }
  toggleComplete({ id }) {  }
  updateFilter(filter: VISIBILITY_FILTER) {  }

}

export const facade = new TodosFacade();
