import React from 'react';
import {AddNotes} from './components/AddNotes'
import {NotesList} from './components/NotesList'
//import provider component
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  //Wrap the provider component inside the return statement
  return (
    <GlobalProvider>
      <AddNotes />
      <NotesList />
    </GlobalProvider>
  );
}

export default App;


