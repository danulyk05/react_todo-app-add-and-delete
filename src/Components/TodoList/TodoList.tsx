import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';

type Props = {
  todos: Todo[];
  onDelete: (todoId: number) => void;
  deletingIds: number[];
};

export const TodoList: React.FC<Props> = ({
  todos,
  onDelete,
  deletingIds,
}) => {
  return (
    <section data-cy="TodoList" className="todoapp__main">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          deletingIds={deletingIds}
        />
      ))}

      {/* This todo is not completed */}
      {/* <div className="todo">
        <label className="todo__status-label">
          <input
            type="checkbox"
            className="todo__status"
          />
        </label>

        <span className="todo__title">Not Completed Todo</span>
        <button type="button" className="todo__remove">×</button>

        <div className="modal overlay">
          <div className="modal-background has-background-white-ter" />
          <div className="loader" />
        </div>
      </div> */}

      {/* This todo is being edited */}
      {/* <div className="todo">
        <label className="todo__status-label">
          <input
            type="checkbox"
            className="todo__status"
          />
        </label> */}

      {/* This form is shown instead of the title and remove button */}
      {/* <form>
          <input
            type="text"
            className="todo__title-field"
            placeholder="Empty todo will be deleted"
            value="Todo is being edited now"
          />
        </form>

        <div className="modal overlay">
          <div className="modal-background has-background-white-ter" />
          <div className="loader" />
        </div>
      </div> */}

      {/* This todo is in loadind state */}
      {/* <div className="todo">
        <label className="todo__status-label">
          <input type="checkbox" className="todo__status" />
        </label>

        <span className="todo__title">Todo is being saved now</span>
        <button type="button" className="todo__remove">×</button> */}

      {/* 'is-active' class puts this modal on top of the todo */}
      {/* <div className="modal overlay is-active">
          <div className="modal-background has-background-white-ter" />
          <div className="loader" />
        </div>
      </div> */}

    </section>
  );
};