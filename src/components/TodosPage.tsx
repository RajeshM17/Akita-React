import * as React from 'react';
import { IonFooter, IonToolbar, IonButton } from '@ionic/react';

import { TodoList, AddTodo, Filters } from './index';
import { facade } from '../state';

const todoBar = {
  display: 'flex', 
  placeContent: 'center space-between',
  borderBottom: '1px solid #dadada',
  backgroundColor: '#e8e8e8',
  paddingTop: '5px'
} as React.CSSProperties;

export const TodosPage: React.FC = () => {
  const history = facade.history;

  return (
    <>
      <div style={todoBar}>
        <AddTodo onAdd={(item) => facade.addTodo(item)} />
        <Filters selectedFilter={facade.filter} 
                 onChange={(value: any) => facade.updateFilter(value)} />
      </div>
      
      <TodoList todos={facade.todos}
                onToggle={(item) => facade.toggleComplete(item)}
                onDelete={(item) => facade.deleteTodo(item)}      />

      <IonFooter className="footer" color="secondary">
        <IonToolbar>
          <div style={{position: 'absolute', right: '20px', top: '3px'}}>
            <IonButton onClick={() => history.undo()} disabled={!history.hasPast} color={facade.todos.length ? 'success' : 'white'}>   Undo </IonButton>
            <IonButton onClick={() => history.redo()} disabled={!history.hasFuture} color={facade.todos.length ? 'success' : 'white'}> Redo </IonButton>
          </div>
        </IonToolbar>
      </IonFooter>  
    </>
  );
};


