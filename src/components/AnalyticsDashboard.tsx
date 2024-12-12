import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface AnalyticsDashboardProps {
  avgLikes: number;
  avgComments: number;
  avgShares: number;
}

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({
  avgLikes,
  avgComments,
  avgShares,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Average Likes</h3>
          <Heart className="w-6 h-6 text-red-500" />
        </div>
        <p className="text-3xl font-bold text-gray-900">{avgLikes.toFixed(1)}</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Average Comments</h3>
          <MessageCircle className="w-6 h-6 text-blue-500" />
        </div>
        <p className="text-3xl font-bold text-gray-900">{avgComments.toFixed(1)}</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Average Shares</h3>
          <Share2 className="w-6 h-6 text-green-500" />
        </div>
        <p className="text-3xl font-bold text-gray-900">{avgShares.toFixed(1)}</p>
      </div>
    </div>
  );
};