import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

const initialState = {
  comments: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    case DELETE_COMMENT: {
      const comments = state
        .comments
        .filter(comment => comment.body !== action.payload);

      return {
        ...state,
        comments
      };
    }
    default:
      return state;
  }
};

export default reducer;
