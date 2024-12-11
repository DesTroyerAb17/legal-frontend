import React, { useState } from 'react';
import { fetchPrediction } from '../services/api';

const AnalysisForm: React.FC<{ onResult: (data: any) => void }> = ({ onResult }) => {
  const [scenario, setScenario] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await fetchPrediction(scenario);
      onResult(result);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <textarea
        className="w-full h-32 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        value={scenario}
        onChange={(e) => setScenario(e.target.value)}
        placeholder="Describe your legal scenario..."
      />
      <button
        type="submit"
        className={`w-full py-3 text-white rounded-lg transition ${
          loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        }`}
        disabled={loading}
      >
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>
    </form>
  );
};

export default AnalysisForm;
