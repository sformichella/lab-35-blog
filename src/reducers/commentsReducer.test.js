import { createComment, deleteComment } from '../actions/commentActions';
import reducer from './commentsReducer';

describe('comment reducer', () => {
  it('makes a comment', () => {
    const state = {
      comments: []
    };

    const action = createComment({
      index: '1',
      body: 'really cool comment'
    });

    const updatedState = reducer(state, action);

    expect(updatedState).toEqual({
      comments: [{
        index: '1',
        body: 'really cool comment'
      }]
    });
  });

  it('deletes a comment', () => {
    const state = {
      comments: [{
        index: '1',
        body: 'really cool comment'
      }]
    };

    const action = deleteComment('really cool comment');

    const updatedState = reducer(state, action);

    expect(updatedState).toEqual({
      comments: []
    });
  });
});
