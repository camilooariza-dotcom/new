import { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface EvaluationFormProps {
  onEvaluationComplete: () => void;
}

export function EvaluationForm({ onEvaluationComplete }: EvaluationFormProps) {
  const [formData, setFormData] = useState({
    appName: '',
    appType: '',
    evaluatorName: '',
    functionalityScore: 0,
    reliabilityScore: 0,
    usabilityScore: 0,
    efficiencyScore: 0,
    maintainabilityScore: 0,
    portabilityScore: 0,
    observations: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const appTypes = [
    'Sistema de Gestión de Aprendizaje (LMS)',
    'Aplicación de Evaluaciones',
    'Plataforma de Contenido Educativo',
    'Herramienta de Colaboración',
    'Sistema de Administración Escolar',
    'Aplicación de Gamificación',
    'Otro',
  ];

  const criteria = [
    {
      id: 'functionalityScore',
      label: 'Funcionalidad',
      description: '¿El software cumple con todas las funciones requeridas correctamente?',
    },
    {
      id: 'reliabilityScore',
      label: 'Confiabilidad',
      description: '¿El software funciona sin errores y mantiene su rendimiento en el tiempo?',
    },
    {
      id: 'usabilityScore',
      label: 'Usabilidad',
      description: '¿Es fácil de usar e intuitivo para estudiantes y docentes?',
    },
    {
      id: 'efficiencyScore',
      label: 'Eficiencia',
      description: '¿El software responde rápidamente y utiliza recursos de manera óptima?',
    },
    {
      id: 'maintainabilityScore',
      label: 'Mantenibilidad',
      description: '¿Es fácil actualizar, corregir errores y agregar nuevas funciones?',
    },
    {
      id: 'portabilityScore',
      label: 'Portabilidad',
      description: '¿Funciona correctamente en diferentes dispositivos y plataformas?',
    },
  ];

  const handleScoreChange = (criteriaId: string, value: number) => {
    setFormData({ ...formData, [criteriaId]: value });
  };

  const calculateFinalScore = () => {
    const scores = [
      formData.functionalityScore,
      formData.reliabilityScore,
      formData.usabilityScore,
      formData.efficiencyScore,
      formData.maintainabilityScore,
      formData.portabilityScore,
    ];
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return Number((sum / scores.length).toFixed(2));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const finalScore = calculateFinalScore();

      const { error } = await supabase.from('evaluations').insert([
        {
          app_name: formData.appName,
          app_type: formData.appType,
          evaluator_name: formData.evaluatorName,
          functionality_score: formData.functionalityScore,
          reliability_score: formData.reliabilityScore,
          usability_score: formData.usabilityScore,
          efficiency_score: formData.efficiencyScore,
          maintainability_score: formData.maintainabilityScore,
          portability_score: formData.portabilityScore,
          final_score: finalScore,
          observations: formData.observations,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        appName: '',
        appType: '',
        evaluatorName: '',
        functionalityScore: 0,
        reliabilityScore: 0,
        usabilityScore: 0,
        efficiencyScore: 0,
        maintainabilityScore: 0,
        portabilityScore: 0,
        observations: '',
      });

      setTimeout(() => {
        onEvaluationComplete();
      }, 2000);
    } catch (error) {
      console.error('Error submitting evaluation:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.appName.trim() !== '' &&
      formData.appType !== '' &&
      formData.functionalityScore > 0 &&
      formData.reliabilityScore > 0 &&
      formData.usabilityScore > 0 &&
      formData.efficiencyScore > 0 &&
      formData.maintainabilityScore > 0 &&
      formData.portabilityScore > 0
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Evaluar Aplicativo Educativo</h2>
        <p className="text-gray-600 mb-8">
          Complete el siguiente formulario para evaluar la calidad de un software educativo basándose en los criterios ISO/IEC 25010.
          Califique cada aspecto de 0 a 5, donde 0 es muy deficiente y 5 es excelente.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre del Aplicativo *
            </label>
            <input
              type="text"
              value={formData.appName}
              onChange={(e) => setFormData({ ...formData, appName: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ej: Plataforma Educativa Virtual"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Aplicativo *
            </label>
            <select
              value={formData.appType}
              onChange={(e) => setFormData({ ...formData, appType: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Seleccione un tipo</option>
              {appTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre del Evaluador (Opcional)
            </label>
            <input
              type="text"
              value={formData.evaluatorName}
              onChange={(e) => setFormData({ ...formData, evaluatorName: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tu nombre"
            />
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Criterios de Evaluación</h3>
            <div className="space-y-8">
              {criteria.map((criterion) => (
                <div key={criterion.id} className="bg-gray-50 rounded-lg p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{criterion.label}</h4>
                    <p className="text-sm text-gray-600">{criterion.description}</p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600 w-16">0 (Malo)</span>
                    <div className="flex space-x-2 flex-1">
                      {[0, 1, 2, 3, 4, 5].map((value) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => handleScoreChange(criterion.id, value)}
                          className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                            formData[criterion.id as keyof typeof formData] === value
                              ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                          }`}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 w-24 text-right">5 (Excelente)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Observaciones Adicionales (Opcional)
            </label>
            <textarea
              value={formData.observations}
              onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Comentarios adicionales sobre la evaluación..."
            />
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
              <p className="text-green-800">Evaluación guardada exitosamente. Redirigiendo a resultados...</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
              <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
              <p className="text-red-800">Error al guardar la evaluación. Por favor, intenta nuevamente.</p>
            </div>
          )}

          <button
            type="submit"
            disabled={!isFormValid() || isSubmitting}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? 'Guardando...' : 'Enviar Evaluación'}
          </button>
        </form>
      </div>
    </div>
  );
}
