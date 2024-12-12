import React from 'react';
import { Activity } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center space-x-3">
          <Activity className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-900">Social Media Analyzer</h1>
        </div>
      </div>
    </header>
  );
};
