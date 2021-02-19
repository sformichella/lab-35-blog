import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createComment } from '../../actions/commentActions';
import { useDispatch } from 'react-redux';

export default function CommentForm({ index }) {
  const dispatch = useDispatch();

  const [body, setBody] = useState('');

  const submitForm = e => {
    e.preventDefault();

    dispatch(createComment({ index, body }));
  };

  const updateBody = ({ target }) => {
    const { value: body } = target;

    setBody(body);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="comment-body">Comment: </label>
      <input 
        required
        id="comment-body"
        type="text"
        onChange={updateBody}
        value={body}
      />
      <button>Comment!</button>
    </form>
  );
}

CommentForm.propTypes = {
  index: PropTypes.string.isRequired
};
