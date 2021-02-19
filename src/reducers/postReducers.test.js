import { createPost, deletePost } from '../actions/postActions';
import reducer from './postsReducer';

describe('post reducer', () => {
  it('makes a post', () => {
    const state = {
      posts: {}
    };

    const action = createPost({
      title: 'Really Cool Post',
      body: 'Really cool body'
    });

    const updatedState = reducer(state, action);

    expect(updatedState).toEqual({
      posts: {
        '0': {
          title: 'Really Cool Post',
          body: 'Really cool body'
        }
      }
    });
  });

  it('deletes a post', () => {
    const state = {
      posts: {
        '0': {
          title: 'Really Cool Post',
          body: 'Really cool body'
        }
      },
      comments: [
        { index: '0', body: 'really cool comment'}
      ]
    };

    const action = deletePost('0');
    const updatedState = reducer(state, action);

    expect(updatedState).toEqual({ posts: {}, comments: [] });
  });
});
