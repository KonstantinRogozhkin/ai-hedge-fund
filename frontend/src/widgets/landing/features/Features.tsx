import { Container } from '../../../shared/ui/components/Container'

interface FeatureProps {
  title: string
  description: string
  details: string[]
  icon: React.ReactNode
}

const Feature = ({ title, description, details, icon }: FeatureProps) => {
  return (
    <div className="group relative bg-[#0A1A2F]/80 backdrop-blur-sm rounded-xl border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)] p-6 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden">
      {/* Неоновый эффект при наведении */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
      
      {/* Декоративная линия */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="relative">
        {/* Заголовок и иконка */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-950/50 text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-all duration-300">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300">
              {title}
            </h3>
            <p className="text-cyan-100/70 mt-1 leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Детали */}
        <ul className="space-y-2 mt-4">
          {details.map((detail, index) => (
            <li key={index} className="flex items-center text-sm text-cyan-200/60 group-hover:text-cyan-200/80 transition-all duration-300">
              <span className="mr-2 text-cyan-500">•</span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const getFeatureIcon = (type: string) => {
  switch (type) {
    case 'graph':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    case 'realtime':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    case 'agents':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    case 'risk':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    case 'data':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
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

const features = [
  {
    title: 'Граф принятия решений',
    description: 'Направленный ациклический граф для последовательного анализа и принятия решений',
    details: [
      'Параллельный анализ через различных агентов',
      'Гибкая конфигурация и масштабируемость',
      'Визуализация логики принятия решений',
      'Отказоустойчивая архитектура'
    ],
    icon: 'graph'
  },
  {
    title: 'Realtime API',
    description: 'Современный API с поддержкой WebSocket для работы в реальном времени',
    details: [
      'REST и WebSocket endpoints',
      'Асинхронная обработка данных',
      'Поддержка CORS и аутентификации',
      'Масштабируемая архитектура'
    ],
    icon: 'realtime'
  },
  {
    title: 'Мультиагентная система',
    description: 'Взаимодействие специализированных AI-агентов для комплексного анализа',
    details: [
      'Технический и фундаментальный анализ',
      'Анализ настроений рынка',
      'Оценка стоимости активов',
      'Управление рисками и портфелем'
    ],
    icon: 'agents'
  },
  {
    title: 'Управление рисками',
    description: 'Автоматизированная система контроля и управления рисками',
    details: [
      'Контроль лимитов позиций',
      'Диверсификация портфеля',
      'Анализ корреляций',
      'Стресс-тестирование'
    ],
    icon: 'risk'
  },
  {
    title: 'Модуль анализа данных',
    description: 'Комплексная система для работы с финансовыми данными',
    details: [
      'OHLCV данные и технические индикаторы',
      'Финансовые метрики и мультипликаторы',
      'Инсайдерские сделки и новости',
      'Кэширование и оптимизация'
    ],
    icon: 'data'
  }
]

export const Features = () => {
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
                System Features • Active
              </span>
            </div>

            {/* Заголовок */}
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              Преимущества системы
            </h2>
            <p className="text-lg sm:text-xl text-cyan-100/80 max-w-3xl mx-auto leading-relaxed font-light tracking-wide mb-16">
              Комплексное решение для
              <span className="text-cyan-200 font-normal"> автоматизированного трейдинга </span>
              с использованием передовых технологий
              <span className="block mt-2 text-cyan-300/90 font-medium">Инновации на службе ваших инвестиций</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Feature
                key={index}
                title={feature.title}
                description={feature.description}
                details={feature.details}
                icon={getFeatureIcon(feature.icon)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
