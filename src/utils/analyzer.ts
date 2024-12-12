import { Post } from '../types/Post';

export const calculateAverageLikes = (posts: Post[]): number => {
  if (posts.length === 0) return 0;
  return posts.reduce((sum, post) => sum + post.likes, 0) / posts.length;
};

export const calculateAverageComments = (posts: Post[]): number => {
  if (posts.length === 0) return 0;
  return posts.reduce((sum, post) => sum + post.comments, 0) / posts.length;
};

export const calculateAverageShares = (posts: Post[]): number => {
  if (posts.length === 0) return 0;
  return posts.reduce((sum, post) => sum + post.shares, 0) / posts.length;
};

export const calculateEngagementScore = (post: Post): number => {
  return post.likes + 2 * post.comments + 3 * post.shares;
};
