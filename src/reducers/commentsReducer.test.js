import { createComment, deleteComment, deleteComments } from '../actions/commentActions';
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

  it('deletes all comments with index 1', () => {
    const state = {
      comments: [
        { index: '0', body: 'e' },
        { index: '1', body: 'e' },
        { index: '1', body: 'e' },
        { index: '2', body: 'e' }
      ]
    };

    const action = deleteComments('1');

    const updatedState = reducer(state, action);

    expect(updatedState).toEqual({
      comments: [
        { index: '0', body: 'e' },
        { index: '2', body: 'e' }
      ]
    });
  });
});
