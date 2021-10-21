import * as React from 'react';
import { useState } from 'react';
import { IonItem, IonInput, IonIcon } from '@ionic/react';
import { alarm } from 'ionicons/icons';
import { InputChangeEventDetail } from '@ionic/core';

// ****************************************
// Styles
// ****************************************

const inlineItem = (hasText, isDirty) => ({
  '--min-height': '20px',
  '--border-radius': '5px',
  '--background': hasText ? '#a8f9d2' : (isDirty ? 'pink' : 'white')
}) as React.CSSProperties;

const addForm = {
  marginTop: '13px', 
  width: '40vw', 
  paddingLeft: '15px'
} as React.CSSProperties;

const iconGap = (hasText) => ({
  marginRight: '10px', 
  marginTop: '3px',
  color: hasText ? 'green' : 'gray'  
}) as React.CSSProperties;

// ****************************************
// AddTodo Functional Component
// ****************************************

export type AddTodoProps = {
  onAdd: (text: string) => void;
}

export const AddTodo: React.FC<AddTodoProps> = ({onAdd}) => {
  const [text, isDirty, updateText, reset] = useTextField('');
  const hasText = !!text.length;
  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    onAdd(text);
    reset();
    ev.preventDefault();
  };

  return (
    <div style={addForm}>
      <IonItem style={inlineItem(hasText, isDirty)}>
        <IonIcon icon={alarm} style={iconGap(hasText)}/>
        <form onSubmit={onSubmit}>
          <IonInput value={text} 
                    placeholder="Add a todo:" 
                    onIonChange={updateText}
                    onIonBlur={() => reset()}></IonInput>            
        </form>
      </IonItem>
    </div>
  );
};

// ************************************************
// Custom Form Field Hook to track value + isDirty
// ************************************************

export interface TextState {
  isDirty: boolean;
  text: string;
}

export type TextHookResponse = [
  string, 
  boolean, 
  (e: CustomEvent<InputChangeEventDetail>)=>void, 
  ()=>void
];

export function useTextField(initialValue): TextHookResponse {
  const [state, setState] = useState<TextState>({
    isDirty: false,
    text: initialValue
  });
  const updateText = (e: CustomEvent<InputChangeEventDetail>) => { 
    const text = e.detail.value;
    setState((state)=> {
      const isDirty = !!text ? true : state.isDirty;
      return { text, isDirty }
    })
  }
  const reset = () => {
    setState((state)=> {
      return { text: '', isDirty: false }
    });
  }

  return [state.text, state.isDirty, updateText, reset];
}