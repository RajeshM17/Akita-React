import * as React from 'react';
import {
  IonItem,
  IonButton,
  IonLabel,
  IonIcon,
  IonContent
} from '@ionic/react';
import {trash} from 'ionicons/icons'
import { Todo } from '../state';

export interface TodoListProps {
  todos     : Todo[];
  onToggle: (item: Todo) => void;
  onDelete: (item: Todo) => void;
}

export interface TodoItemProps {
  todo     : Todo;
  toggleComplete: (item: Todo) => void;
  deleteTodo: (item: Todo) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <IonItem href="#" style={{width: '92vw'}}>
      <IonLabel style={{ marginRight: '10px', textDecoration: todo.completed ? 'line-through' : 'none' }}> {todo.text} </IonLabel>
      <IonButton fill="clear" onClick={() => deleteTodo(todo)}> 
        <IonIcon icon={trash} color="warning" size="large" slot="start" style={{'--ion-color-warning': '#843939'}}/>
      </IonButton>
      <IonButton onClick={() => toggleComplete(todo)}>Toggle Status</IonButton>
      <IonButton onClick={() => todo.completed = true} color="danger" >Mutate Status (error)</IonButton>
    </IonItem>
  );
};

export const TodoList: React.FC<TodoListProps> = ({todos, onToggle, onDelete}) => {
  return (
    <IonContent className="content">
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={onToggle}
            deleteTodo={onDelete}
          />
        ))}
      </ul>
    </IonContent>
  );
};