export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = comment => ({
  type: CREATE_COMMENT,
  payload: comment
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = body => ({
  type: DELETE_COMMENT,
  payload: body
});

export const DELETE_POST_COMMENTS = 'DELETE_POST_COMMENTS';
export const deleteComments = index => ({
  type: DELETE_POST_COMMENTS,
  payload: index
});
