import { Container } from '../../../shared/ui/components/Container'
import { AgentCard } from '../../../entities/agent/ui/AgentCard'
import { TechnicalAgent } from '../../../entities/agent/ui/agents/TechnicalAgent'



const getAgentIcon = (type: string) => {
  switch (type) {
    case 'fundamentals':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    case 'technical':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    case 'sentiment':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    case 'portfolio':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    case 'risk':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    case 'buffett':
      return (
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
          <img
            src="/avatars/WarrenBuffet2.jpg"
            alt="Warren Buffett"
            className="w-full h-full object-cover"
          />
        </div>
      )
    case 'ackman':
      return (
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
          <img
            src="/avatars/Ackman_Bill_NEW.jpeg"
            alt="Bill Ackman"
            className="w-full h-full object-cover"
          />
        </div>
      )
    case 'graham':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    case 'lynch':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    default:
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
  }
}

const getPersonalityAvatar = (type: string) => {
  switch (type) {
    case 'buffett':
      return (
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.25)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]">
          <img
            src="/avatars/WarrenBuffet2.jpg"
            alt="Warren Buffett"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )
    case 'ackman':
      return (
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.25)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]">
          <img
            src="/avatars/Ackman_Bill_NEW.jpeg"
            alt="Bill Ackman"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )
    case 'graham':
      return (
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.25)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]">
          <img
            src="/avatars/benjamin-graham.jpg"
            alt="Benjamin Graham"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )
    case 'lynch':
      return (
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.25)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]">
          <img
            src="/avatars/peter-lynch.jpg"
            alt="Peter Lynch"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )
    default:
      return getAgentIcon('default')
  }
}

const analyticalAgents = [
  {
    title: 'Fundamentals Agent',
    icon: 'fundamentals',
    description: 'Проводит комплексный анализ финансового здоровья компаний, оценивая прибыльность, рост, финансовую устойчивость и мультипликаторы',
    features: [
      'Анализ рентабельности капитала и активов',
      'Оценка темпов роста и стабильности',
      'Анализ финансовой устойчивости',
      'Расчет оценочных мультипликаторов',
      'Прогнозирование будущих показателей'
    ]
  },
  {
    title: 'Technical Agent',
    icon: 'technical',
    description: 'Использует пять ключевых стратегий технического анализа для генерации торговых сигналов с учетом рыночных трендов и паттернов',
    features: [
      'Следование тренду (EMA, ADX)',
      'Возврат к среднему (RSI, Bollinger)',
      'Анализ моментума и волатильности',
      'Статистический арбитраж',
      'Комбинирование сигналов'
    ]
  },
  {
    title: 'Sentiment Agent',
    icon: 'sentiment',
    description: 'Анализирует настроения рынка на основе новостей, инсайдерских сделок и социальных медиа для оценки рыночного сентимента',
    features: [
      'Анализ новостного фона',
      'Отслеживание инсайдерских сделок',
      'Оценка рыночных настроений',
      'Анализ социальных медиа',
      'Определение трендов настроений'
    ]
  },
  {
    title: 'Portfolio Manager Agent',
    icon: 'portfolio',
    description: 'Принимает окончательные торговые решения на основе сигналов других агентов с учетом состояния портфеля и рисков',
    features: [
      'Управление позициями портфеля',
      'Исполнение торговых решений',
      'Контроль маржинальных требований',
      'Оптимизация размера позиций',
      'Балансировка портфеля'
    ]
  },
  {
    title: 'Risk Manager Agent',
    icon: 'risk',
    description: 'Обеспечивает безопасность портфеля через управление рисками, контроль позиций и диверсификацию',
    features: [
      'Контроль размера позиций',
      'Управление рисками портфеля',
      'Анализ корреляций активов',
      'Стресс-тестирование портфеля',
      'Мониторинг лимитов риска'
    ]
  },
  {
    title: 'Valuation Agent',
    icon: 'fundamentals',
    description: 'Выполняет детальную оценку стоимости компаний, используя методы DCF и Owner Earnings для определения справедливой цены',
    features: [
      'DCF анализ и моделирование',
      'Расчет Owner Earnings',
      'Оценка маржи безопасности',
      'Анализ мультипликаторов',
      'Прогнозирование роста'
    ]
  }
];

const personalityAgents = [
  {
    title: 'Warren Buffett Agent',
    icon: 'buffett',
    description: 'Реализует инвестиционную стратегию Уоррена Баффета, фокусируясь на поиске компаний с устойчивым конкурентным преимуществом и сильным брендом',
    features: [
      'Анализ конкурентных преимуществ',
      'Оценка качества менеджмента',
      'Расчет внутренней стоимости',
      'Долгосрочное инвестирование',
      'Консервативный подход к оценке'
    ]
  },
  {
    title: 'Bill Ackman Agent',
    icon: 'ackman',
    description: 'Использует активный инвестиционный подход Билла Экмана, ориентированный на поиск недооцененных качественных компаний с потенциалом роста',
    features: [
      'Анализ стабильности денежных потоков',
      'Оценка рыночных преимуществ',
      'Анализ долгосрочного роста',
      'Проверка качества баланса',
      'Оценка эффективности менеджмента'
    ]
  }
];

export const Agents = () => {
  return (
    <section className="relative bg-[#080C14] text-white py-28 overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        {/* Основной градиентный фон */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A2F] via-[#0F172A] to-[#0A0F1F]" />
        
        {/* Кибер-сетка */}
        <div className="absolute inset-0 bg-[url('/cyber-grid.svg')] bg-center opacity-[0.07] animate-pulse" />
        
        {/* Неоновые акценты */}
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-cyan-500/[0.05] via-blue-500/[0.05] to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-purple-500/[0.05] via-indigo-500/[0.05] to-transparent blur-3xl" />
      </div>

      {/* Анимированные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Вертикальные линии */}
        <div className="absolute left-1/3 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute right-1/3 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
      </div>

      <Container>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            {/* Статус секции */}
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-cyan-950/40 backdrop-blur-xl mb-8 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)] group hover:border-cyan-500/40 transition-all duration-300">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500/10 mr-2.5">
                <span className="animate-ping w-2 h-2 rounded-full bg-cyan-400" />
                <span className="absolute w-2 h-2 rounded-full bg-cyan-500" />
              </span>
              <span className="text-sm font-medium bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300">
                AI Agents • Active
              </span>
            </div>

            {/* Заголовок */}
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              Наши AI-агенты
            </h2>
            <p className="text-lg sm:text-xl text-cyan-100/80 max-w-3xl mx-auto leading-relaxed font-light tracking-wide mb-16">
              Команда специализированных
              <span className="text-cyan-200 font-normal"> AI-агентов </span>
              для комплексного анализа рынка
              <span className="block mt-2 text-cyan-300/90 font-medium">Каждый агент выполняет свою уникальную роль</span>
            </p>
          </div>

          {/* Analytical Agents Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Аналитические агенты
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TechnicalAgent />
              {analyticalAgents.map((agent, index) => (
                <AgentCard
                  key={index}
                  title={agent.title}
                  description={agent.description}
                  features={agent.features}
                  icon={getAgentIcon(agent.icon)}
                />
              ))}
            </div>
          </div>

          {/* Personality Agents Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Агенты личности
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalityAgents.map((agent, index) => (
                <AgentCard
                  key={index}
                  title={agent.title}
                  description={agent.description}
                  features={agent.features}
                  icon={getPersonalityAvatar(agent.icon)}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
