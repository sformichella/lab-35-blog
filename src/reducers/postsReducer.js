import { CREATE_POST, DELETE_POST } from '../actions/postActions';

export const initialState = {
  posts: []
};

export const reducer = (state, action) => {
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

      console.log(posts);

      return {
        ...state,
        posts
      };
    }
    default:
      return state;
  }
};
