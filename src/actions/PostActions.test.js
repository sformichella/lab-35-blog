import {
  createPost,
  CREATE_POST,
  deletePost,
  DELETE_POST
} from './postActions';

describe('post actions', () => {
  it('makes a CREATE_POST action', () => {
    const action = createPost({
      title: 'Really Cool Post',
      body: 'Really cool body'
    });

    expect(action).toEqual({
      type: CREATE_POST,
      payload: {
        title: 'Really Cool Post',
        body: 'Really cool body'
      }
    });
  });

  it('makes a DELETE_POST action', () => {
    const action = deletePost({
      body: 'Really cool body'
    });

    expect(action).toEqual({
      type: DELETE_POST,
      payload: {
        body: 'Really cool body'
      }
    });
  });
});
