import { Container } from '../../../shared/ui/components/Container'

const steps = [
  {
    number: '01',
    title: 'Инициализация',
    description: 'Загрузка конфигурации и создание экземпляров всех агентов'
  },
  {
    number: '02',
    title: 'Анализ',
    description: 'Каждый агент анализирует данные в своей специализации'
  },
  {
    number: '03',
    title: 'Принятие решений',
    description: 'Portfolio Manager собирает рекомендации и формирует решения'
  },
  {
    number: '04',
    title: 'Управление рисками',
    description: 'Risk Manager проверяет решения на соответствие риск-параметрам'
  }
]

export const Workflow = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Как это работает
          </h2>
          <p className="text-xl text-gray-600">
            Процесс принятия инвестиционных решений
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
