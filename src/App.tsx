import React, { useState } from 'react';
import AnalysisForm from './components/AnalysisForm';
import AnalysisResults from './components/AnalysisResults';

const App: React.FC = () => {
  const [result, setResult] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <header className="bg-blue-600 text-white py-4 shadow">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Legal Section Finder</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <AnalysisForm onResult={setResult} />
          <AnalysisResults result={result} />
        </div>
      </main>
    </div>
  );
};

export default App;
