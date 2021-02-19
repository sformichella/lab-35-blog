import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({ body }) {
  return (
    <>
      { body }
    </>
  );
}

Comment.propTypes = {
  body: PropTypes.string.isRequired
};
