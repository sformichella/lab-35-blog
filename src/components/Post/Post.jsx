import React from 'react';
import PropTypes from 'prop-types';

import CommentForm from '../CommentForm/CommentForm';
import Comment from '../Comment/Comment';

import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/postActions';


export default function Post({ index, title, body, comments }) {
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

        <CommentForm index={index}/>

        <ul>
          {
            comments.map((comment, i) => {
              return (
                <li key={i}>
                  <Comment {...comment}/>
                </li>
              );
            })
          }
        </ul>
      </dl>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

Post.propTypes = {
  index: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf({
    index: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};
