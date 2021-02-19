export const getPosts = state => {
  const posts = state.posts.posts;
  const indices = Object.keys(posts);
  
  return indices.map(index => {
    return {
      index,
      ...posts[index]
    };
  });
};
