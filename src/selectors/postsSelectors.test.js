import { getPosts } from './postsSelectors';

describe('post selectors', () => {
  it('selects the posts from state', () => {
    const state = {
      posts: {
        posts: [{
          title: 'Really Cool Post',
          body: 'Really cool body'
        }]
      }
    };

    const posts = getPosts(state);

    expect(posts).toEqual([{
      title: 'Really Cool Post',
      body: 'Really cool body'
    }]);
  });
});
