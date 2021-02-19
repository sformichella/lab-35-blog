import {
  createComment,
  CREATE_COMMENT,
  deleteComment,
  DELETE_COMMENT
} from './commentActions';

describe('comment actions', () => {
  it('makes a CREATE_COMMENT action', () => {
    const action =  createComment({
      index: '1',
      body: 'really cool comment'
    });

    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload: {
        index: '1',
        body: 'really cool comment'
      }
    })
  });

  it('makes a CREATE_COMMENT action', () => {
    const action =  deleteComment({
      index: '1',
      body: 'really cool comment'
    });

    expect(action).toEqual({
      type: DELETE_COMMENT,
      payload: {
        index: '1',
        body: 'really cool comment'
      }
    });
  });
});
