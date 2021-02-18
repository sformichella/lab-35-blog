import React, { useState } from 'react';
import { createPost } from '../../actions/postActions';
import { useDispatch } from 'react-redux';

export default function PostForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const submitForm = e => {
    e.preventDefault();

    dispatch(createPost({ title, body }));
  };

  const updateTitle = ({ target }) => {
    const { value: title } = target;

    setTitle(title);
  };

  const updateBody = ({ target }) => {
    const { value: body } = target;

    setBody(body);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Title:</label>
      <input
        required
        id="title"
        type="text"
        onChange={updateTitle}
        value={title}
      />
      <label htmlFor="body">Body:</label>
      <input
        required
        id="body"
        type="text"
        onChange={updateBody}
        value={body}
      />
      <button>Post!</button>
    </form>
  );
}
