import React, { useState } from 'react';

export default function PostForm() {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const submitForm = e => {
    e.preventDefault();
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
      <button type="submit">Post!</button>
    </form>
  );
}
