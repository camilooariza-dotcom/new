import { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Award, Calendar } from 'lucide-react';
import { supabase, Evaluation } from '../lib/supabase';

export function ResultsSection() {
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchEvaluations();
  }, []);

  const fetchEvaluations = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('evaluations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEvaluations(data || []);
    } catch (error) {
      console.error('Error fetching evaluations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 4.5) return 'text-green-600 bg-green-100';
    if (score >= 3.5) return 'text-blue-600 bg-blue-100';
    if (score >= 2.5) return 'text-yellow-600 bg-yellow-100';
    if (score >= 1.5) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 4.5) return 'Excelente';
    if (score >= 3.5) return 'Bueno';
    if (score >= 2.5) return 'Regular';
    if (score >= 1.5) return 'Deficiente';
    return 'Muy Deficiente';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const calculateAverage = () => {
    if (evaluations.length === 0) return 0;
    const sum = evaluations.reduce((acc, evaluation) => acc + Number(evaluation.final_score), 0);
    return (sum / evaluations.length).toFixed(2);
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-xl p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Resultados de Evaluaciones</h2>
            <p className="text-blue-100">Análisis de calidad de software educativo</p>
          </div>
          <BarChart3 className="w-16 h-16 text-blue-200" />
        </div>
      </div>

      {evaluations.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No hay evaluaciones disponibles</h3>
          <p className="text-gray-500">
            Las evaluaciones aparecerán aquí una vez que se completen. Navega a "Evaluar Aplicativo" para comenzar.
          </p>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Total Evaluaciones</span>
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-gray-800">{evaluations.length}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Promedio General</span>
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-gray-800">{calculateAverage()} / 5</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Mejor Calificación</span>
                <Award className="w-5 h-5 text-yellow-600" />
              </div>
              <p className="text-3xl font-bold text-gray-800">
                {Math.max(...evaluations.map((e) => Number(e.final_score))).toFixed(2)} / 5
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {evaluations.map((evaluation) => (
              <div key={evaluation.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{evaluation.app_name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="bg-gray-100 px-3 py-1 rounded-full">{evaluation.app_type}</span>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(evaluation.created_at)}
                        </div>
                        {evaluation.evaluator_name && (
                          <span>Evaluador: {evaluation.evaluator_name}</span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`inline-block px-4 py-2 rounded-lg font-bold text-2xl ${getScoreColor(
                          Number(evaluation.final_score)
                        )}`}
                      >
                        {Number(evaluation.final_score).toFixed(2)}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {getScoreLabel(Number(evaluation.final_score))}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Funcionalidad</p>
                      <p className="text-lg font-bold text-blue-600">
                        {Number(evaluation.functionality_score).toFixed(1)}
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Confiabilidad</p>
                      <p className="text-lg font-bold text-green-600">
                        {Number(evaluation.reliability_score).toFixed(1)}
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Usabilidad</p>
                      <p className="text-lg font-bold text-purple-600">
                        {Number(evaluation.usability_score).toFixed(1)}
                      </p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Eficiencia</p>
                      <p className="text-lg font-bold text-orange-600">
                        {Number(evaluation.efficiency_score).toFixed(1)}
                      </p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Mantenibilidad</p>
                      <p className="text-lg font-bold text-red-600">
                        {Number(evaluation.maintainability_score).toFixed(1)}
                      </p>
                    </div>
                    <div className="bg-teal-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Portabilidad</p>
                      <p className="text-lg font-bold text-teal-600">
                        {Number(evaluation.portability_score).toFixed(1)}
                      </p>
                    </div>
                  </div>

                  {evaluation.observations && (
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                      <p className="text-sm font-semibold text-gray-700 mb-1">Observaciones:</p>
                      <p className="text-sm text-gray-600">{evaluation.observations}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
