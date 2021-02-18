import React from 'react';

import { PostProvider } from '../../state/PostProvider';
import PostForm from '../PostForm/PostForm';
import PostList from '../PostList/PostList';

export default function App() {
  return (
    <PostProvider>
      <PostForm />
      <PostList />
    </PostProvider>
  );
}
