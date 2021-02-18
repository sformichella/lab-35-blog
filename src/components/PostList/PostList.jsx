import React from 'react';
import { useSelector } from 'react-redux';
import { getPosts } from '../../selectors/postsSelectors';

import Post from '../../components/Post/Post';

export default function PostList() {
  const posts = useSelector(getPosts);

  const postElements = posts
    .map(post => (
      <li key={post.index}>
        <Post {...post}/>
      </li>
    ));

  return (
    <ul>
      {postElements}
    </ul>
  );
}
