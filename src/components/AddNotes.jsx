import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddNotes = () => {
  const [noteInput, setNoteInput] = useState('')
  const { addNotes } = useContext(GlobalContext);

  //Make an onSubmit event
  const onSubmit = e => {
    e.preventDefault();
    if (!noteInput) {
      return;
    }
    const newNote = {
      id: Math.floor(Math.random() * 100000000),
      text: noteInput
    }

    addNotes(newNote);
    setNoteInput('');
  }

  //Make an onSubmit event to the form inside the return statement
  return(
    <div>
      <h1> Add a new note... </h1>
      <form className="note-form" onSubmit={onSubmit}>
        <textarea placeholder="Type your note here..." value = {noteInput} onChange= {e => setNoteInput(e.target.value)}>
        </textarea>
        <button>Add</button>
      </form>
    </div>
  )
}