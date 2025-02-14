import { AgentCard } from '../AgentCard'

export const TechnicalAgent = () => {
  const icon = (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
  )

  return (
    <AgentCard
      title="Technical Agent"
      description="Проводит технический анализ рынка и отдельных инструментов"
      features={[
        'Следование тренду',
        'Возврат к среднему',
        'Моментум',
        'Статистический арбитраж'
      ]}
      icon={icon}
    />
  )
} 