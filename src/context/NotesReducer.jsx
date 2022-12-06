export default (state, action) => {
  switch(action.type) {
    //Add a case for adding new note
    case 'ADD_NOTE': 
      return {
        ...state,
        notes: [...state.notes, action.payload]
      }
    default:
      return state;
  }
}

