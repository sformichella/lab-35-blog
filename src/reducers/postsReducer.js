import { CREATE_POST, DELETE_POST } from '../actions/postActions';
import getFreeIndex from '../utils/getFreeIndex';

export const initialState = {
  posts: {}
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_POST: {
      const newIndex = getFreeIndex(state.posts);
      const posts = { ...state.posts };
      posts[newIndex] = action.payload;

      return {
        ...state,
        posts
      };
    }
      
    case DELETE_POST: {
      const index = action.payload;
      const posts = { ...state.posts };

      delete posts[index];

      const comments = state.comments
        .filter(comment => comment.index !== index);

      return {
        ...state,
        posts,
        comments
      };
    }
    default:
      return state;
  }
};

export default reducer;
