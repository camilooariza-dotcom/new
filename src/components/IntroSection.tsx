import { CheckCircle, Target, BookOpen, Lightbulb } from 'lucide-react';

export function IntroSection() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-bold mb-4">Calidad de Software</h1>
        <p className="text-xl text-blue-100">
          Guía completa para entender y aplicar los estándares de calidad en el desarrollo de software educativo
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-start mb-6">
          <BookOpen className="w-8 h-8 text-blue-600 mr-4 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">¿Qué es la Calidad de Software?</h2>
            <p className="text-gray-600 leading-relaxed">
              La calidad de software es el grado en que un producto de software cumple con los requisitos especificados
              y satisface las necesidades del usuario. Se basa en características medibles que determinan qué tan bien
              el software realiza sus funciones previstas en un contexto específico de uso.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Modelo ISO/IEC 25010</h3>
          <p className="text-gray-600 mb-6">
            El estándar internacional ISO/IEC 25010 define las características de calidad del software:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800 mb-2">1. Funcionalidad</h4>
              <p className="text-gray-600 text-sm">
                Capacidad del software para proporcionar funciones que satisfacen necesidades establecidas cuando se usa bajo condiciones específicas.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800 mb-2">2. Confiabilidad</h4>
              <p className="text-gray-600 text-sm">
                Capacidad de funcionar correctamente bajo condiciones establecidas durante un período específico.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800 mb-2">3. Usabilidad</h4>
              <p className="text-gray-600 text-sm">
                Facilidad con la que los usuarios pueden utilizar el software de manera efectiva, eficiente y satisfactoria.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-gray-800 mb-2">4. Eficiencia</h4>
              <p className="text-gray-600 text-sm">
                Rendimiento relativo a la cantidad de recursos utilizados bajo condiciones establecidas.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-gray-800 mb-2">5. Mantenibilidad</h4>
              <p className="text-gray-600 text-sm">
                Facilidad con la que el software puede ser modificado para correcciones, mejoras o adaptaciones.
              </p>
            </div>

            <div className="border-l-4 border-teal-500 pl-4">
              <h4 className="font-semibold text-gray-800 mb-2">6. Portabilidad</h4>
              <p className="text-gray-600 text-sm">
                Capacidad de ser transferido de un entorno a otro (hardware, software, organizacional).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-start mb-6">
          <Target className="w-8 h-8 text-green-600 mr-4 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Importancia en Entornos Educativos</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              En el contexto educativo, la calidad del software es crucial porque impacta directamente en la experiencia
              de aprendizaje de los estudiantes y la eficiencia de los docentes.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4">
            <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
            <h4 className="font-semibold text-gray-800 mb-2">Accesibilidad Universal</h4>
            <p className="text-gray-600 text-sm">
              Software de calidad garantiza que todos los estudiantes puedan acceder al contenido educativo sin barreras técnicas.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
            <h4 className="font-semibold text-gray-800 mb-2">Confiabilidad en Evaluaciones</h4>
            <p className="text-gray-600 text-sm">
              Sistemas estables previenen la pérdida de datos de evaluaciones y garantizan resultados precisos.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
            <h4 className="font-semibold text-gray-800 mb-2">Experiencia de Usuario Intuitiva</h4>
            <p className="text-gray-600 text-sm">
              Interfaces claras permiten que docentes y estudiantes se enfoquen en el aprendizaje, no en la tecnología.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
            <h4 className="font-semibold text-gray-800 mb-2">Escalabilidad</h4>
            <p className="text-gray-600 text-sm">
              Software eficiente puede manejar el crecimiento de usuarios sin degradación del rendimiento.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-start mb-6">
          <Lightbulb className="w-8 h-8 text-yellow-600 mr-4 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Beneficios de Aplicar Calidad de Software</h2>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              1
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Reducción de Costos</h4>
              <p className="text-gray-600 text-sm">
                Detectar y corregir errores tempranamente es significativamente más económico que hacerlo después del despliegue.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              2
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Mayor Satisfacción del Usuario</h4>
              <p className="text-gray-600 text-sm">
                Software confiable y fácil de usar genera confianza y mejora la experiencia educativa.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              3
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Mantenimiento Simplificado</h4>
              <p className="text-gray-600 text-sm">
                Código limpio y bien documentado facilita actualizaciones y correcciones futuras.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              4
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Competitividad</h4>
              <p className="text-gray-600 text-sm">
                Productos de mayor calidad se destacan en el mercado y generan mejores referencias.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              5
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Cumplimiento de Estándares</h4>
              <p className="text-gray-600 text-sm">
                Adherirse a normas internacionales garantiza calidad reconocida globalmente.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Aplicación Práctica</h3>
        <p className="text-blue-800 mb-4">
          Esta aplicación te permite evaluar software educativo utilizando los criterios de calidad ISO/IEC 25010.
          Navega a la sección "Evaluar Aplicativo" para realizar una evaluación completa.
        </p>
        <p className="text-blue-700 text-sm">
          Los resultados te proporcionarán una calificación de 0 a 5, donde 0 es la calificación mínima y 5 es la máxima,
          ayudándote a identificar áreas de mejora y fortalezas del software evaluado.
        </p>
      </div>
    </div>
  );
}
