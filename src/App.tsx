import React, { useState } from 'react';
import { Header } from './components/Header';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { ThresholdSlider } from './components/ThresholdSlider';
import { PostList } from './components/PostList';
import { initialPosts } from './data/initialPosts';
import {
  calculateAverageLikes,
  calculateAverageComments,
  calculateAverageShares,
} from './utils/analyzer';

export const App: React.FC = () => {
  const [posts] = useState(initialPosts);
  const [threshold, setThreshold] = useState(25);

  const avgLikes = calculateAverageLikes(posts);
  const avgComments = calculateAverageComments(posts);
  const avgShares = calculateAverageShares(posts);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <AnalyticsDashboard
          avgLikes={avgLikes}
          avgComments={avgComments}
          avgShares={avgShares}
        />
        <ThresholdSlider threshold={threshold} onChange={setThreshold} />
        <PostList posts={posts} threshold={threshold} />
      </main>
    </div>
  );
};