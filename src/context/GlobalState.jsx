import React, {createContext, useReducer} from 'react'
//import the 'NotesReducer' reducer function
import NotesReducer from './NotesReducer';

// Initial state
const initialState = {
  notes: [
    {id:1, text: 'note 1'},
    {id:2, text: 'note 2'},
    {id:3, text: 'note 3'}
  ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  //useReducer hook
  const [state, dispatch] = useReducer(NotesReducer, initialState);

  // Action to add a note
  function addNotes(newNote) {
    dispatch({ type: 'ADD_NOTE', 
    payload: newNote })
  }

  //pass the action to the value parameter of the provider
  return (
    <GlobalContext.Provider value={{
    notes: state.notes,
    addNotes
  }}>
    {children}
  </GlobalContext.Provider>);
}


