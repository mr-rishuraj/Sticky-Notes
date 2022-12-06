//import useContext
import React, { useContext } from 'react';
//import context object
import { GlobalContext } from '../context/GlobalState';

export const NotesList = () => {
  //Consume context object
  const { notes } = useContext(GlobalContext);
  //iterate over notes array inside the return statement
  return (
    <div className="notes">
      <h1>Sticky Notes</h1>
        {notes.map(note => (
          <div key={note.id}> 
            <pre className="text">{note.text}</pre>
          </div>
        ))}
    </div>
  )
}


