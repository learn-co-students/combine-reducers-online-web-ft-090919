export default function authorsReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author]

    case "REMOVE_AUTHOR":
      idx = state.authors.findIndex(author => author.id === action.id);
      return [...state, ...state.authors.slice(0, idx), ...state.authors.slice(idx + 1)]

    default:
      return state;
  }
}
