import React from 'react';
import { useSelector } from '../../state/PostProvider';
import { getPosts } from '../../selectors/postsSelectors';

import Post from '../../components/Post/Post';

export default function PostList() {
  const posts = useSelector(getPosts);

  const postElements = posts
    .map((post, i) => (
      <li key={i}>
        <Post {...post}/>
      </li>
    ));

  return (
    <ul>
      {postElements}
    </ul>
  );
}
