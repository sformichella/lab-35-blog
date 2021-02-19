import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment/Comment';

export default function CommentList({ comments }) {
  return (
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
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired
  }))
};
