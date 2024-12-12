import React from 'react';
import { Post } from '../../types/Post';
import { PostCard } from '../PostCard';
import { calculateEngagementScore } from '../../utils/analyzer';

interface PostListProps {
  posts: Post[];
  threshold: number;
}

export const PostList: React.FC<PostListProps> = ({ posts, threshold }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Posts Analysis</h2>
      {posts.map((post) => {
        const engagementScore = calculateEngagementScore(post);
        if (engagementScore > threshold) {
          return (
            <PostCard
              key={post.postId}
              post={post}
              engagementScore={engagementScore}
            />
          );
        }
        return null;
      })}
    </div>
  );
};
