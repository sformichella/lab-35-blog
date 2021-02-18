import { CREATE_POST, DELETE_POST } from '../actions/postActions';

export const initialState = {
  posts: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case DELETE_POST: {
      const posts = state
        .posts
        .filter(post => post.body !== action.payload);

      return {
        ...state,
        posts
      };
    }
    default:
      return state;
  }
};

export default reducer;
