import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { IntroSection } from './components/IntroSection';
import { EvaluationForm } from './components/EvaluationForm';
import { ResultsSection } from './components/ResultsSection';

function App() {
  const [activeSection, setActiveSection] = useState('intro');

  const handleEvaluationComplete = () => {
    setActiveSection('results');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Sistema de Evaluación de Calidad de Software</h1>
          <p className="text-gray-600 mt-1">Evaluación basada en estándares ISO/IEC 25010</p>
        </div>
      </header>

      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === 'intro' && <IntroSection />}
        {activeSection === 'evaluation' && <EvaluationForm onEvaluationComplete={handleEvaluationComplete} />}
        {activeSection === 'results' && <ResultsSection />}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-600 text-sm">
          <p>Sistema de Evaluación de Calidad de Software Educativo</p>
          <p className="mt-1">Basado en ISO/IEC 25010 - Modelo de Calidad de Software</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
