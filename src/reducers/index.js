const todos = (state = [], action) => {

  switch( action.type ) {
    case 'ADD_TODO':
      return [
        {
          text: action.text
        },
        ...state
      ]
    default:
      return []
  }
}

export default todos