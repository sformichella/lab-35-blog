import { createPost, deletePost } from '../actions/postActions';
import reducer from './postsReducer';

describe('post reducer', () => {
  it('makes a post', () => {
    const state = {
      posts: []
    };

    const action = createPost({
      title: 'Really Cool Post',
      body: 'Really cool body'
    });

    const updatedState = reducer(state, action);

    expect(updatedState).toEqual({
      posts: [{
        title: 'Really Cool Post',
        body: 'Really cool body'
      }]
    });
  });

  it('deletes a post', () => {
    const state = {
      posts: [{
        title: 'Really Cool Post',
        body: 'Really cool body'
      }]
    };

    const action = deletePost('Really cool body');
    const updatedState = reducer(state, action);

    expect(updatedState).toEqual({ posts: [] });
  });
});
