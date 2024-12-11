
import React from 'react';
import {  XCircle } from 'lucide-react';

const AnalysisResults: React.FC<{ result: any }> = ({ result }) => {
  if (!result) return null;

  if (result.error) {
    return (
      <div className="mt-6 p-4 bg-red-100 text-red-800 rounded-lg flex items-center space-x-2">
        <XCircle className="w-6 h-6" />
        <span>{result.error}</span>
      </div>
    );
  }

  return (
    <div className="mt-6 p-4 bg-green-50 border border-green-300 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Best Match</h2>
      <p>
        <strong>Section:</strong> {result.section}
      </p>
      <p>
        <strong>Description:</strong> {result.description}
      </p>
      <p>
        <strong>Similarity Score:</strong> {result.similarity.toFixed(2)}
      </p>
    </div>
  );
};

export default AnalysisResults;
