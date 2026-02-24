import React from "react";

export default function ProgressBar({ step }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
        <span>Personal</span>
        <span>Account</span>
        <span>Review</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(step - 1) * 50}%` }}
        />
      </div>
    </div>
  );
}