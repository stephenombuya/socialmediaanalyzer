import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { Post } from '../types/Post';

interface PostCardProps {
  post: Post;
  engagementScore: number;
}

export const PostCard: React.FC<PostCardProps> = ({ post, engagementScore }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 transition-transform hover:scale-102">
      <p className="text-gray-800 text-lg mb-4">{post.content}</p>
      <div className="flex justify-between items-center text-gray-600">
        <div className="flex items-center space-x-2">
          <Heart className="w-5 h-5 text-red-500" />
          <span>{post.likes}</span>
        </div>
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-5 h-5 text-blue-500" />
          <span>{post.comments}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Share2 className="w-5 h-5 text-green-500" />
          <span>{post.shares}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Engagement Score:</span>
          <span className="text-purple-600">{engagementScore.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};