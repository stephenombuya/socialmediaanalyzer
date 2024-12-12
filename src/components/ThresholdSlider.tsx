import React from 'react';

interface ThresholdSliderProps {
  threshold: number;
  onChange: (value: number) => void;
}

export const ThresholdSlider: React.FC<ThresholdSliderProps> = ({ threshold, onChange }) => {
  return (
    <div className="mb-6">
      <label htmlFor="threshold" className="block text-sm font-medium text-gray-700 mb-2">
        Engagement Threshold
      </label>
      <input
        type="range"
        id="threshold"
        min="0"
        max="100"
        value={threshold}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <span className="text-sm text-gray-600">Current threshold: {threshold}</span>
    </div>
  );
};