import { getPosts } from './postsSelectors';

describe('post selectors', () => {
  it('selects the posts from state', () => {
    const state = {
      posts: {
        posts: {
          '0': {
            title: 'Really Cool Post',
            body: 'Really cool body'
          }
        }
      }
    };

    const posts = getPosts(state);

    expect(posts).toEqual([{
      index: '0',
      title: 'Really Cool Post',
      body: 'Really cool body'
    }]);
  });
});
