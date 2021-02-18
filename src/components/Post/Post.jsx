import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/postActions';


export default function Post({ index, title, body }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(index));
  };

  return (
    <>
      <dl>
        <dt>Title</dt>
        <dd>{title}</dd>

        <dt>Body</dt>
        <dd>{body}</dd>
      </dl>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

Post.propTypes = {
  index: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};
