import { Container } from '../../../shared/ui/components/Container'
import { motion } from 'framer-motion'

interface DataMetricProps {
  title: string
  description: string
  icon: React.ReactNode
}

const DataMetric = ({ title, description, icon }: DataMetricProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-[#0A1A2F]/80 backdrop-blur-sm rounded-xl border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)] p-6 hover:border-cyan-500/40 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
      <div className="relative flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-950/50 text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-all duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300">
            {title}
          </h3>
          <p className="mt-2 text-cyan-100/70 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

const getMetricIcon = (type: string) => {
  switch (type) {
    case 'price':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    case 'metrics':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    case 'insider':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    case 'news':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
        </svg>
      )
    case 'portfolio':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    case 'options':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
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

const metrics = [
  {
    title: 'Ценовые данные',
    description: 'Полный набор OHLCV данных с временными метками для точного анализа движения цен',
    icon: 'price'
  },
  {
    title: 'Финансовые метрики',
    description: 'Комплексный анализ финансовых показателей: P/E, ROE, маржинальность, ликвидность и другие',
    icon: 'metrics'
  },
  {
    title: 'Инсайдерские сделки',
    description: 'Отслеживание сделок инсайдеров, включая объемы, цены и роли участников',
    icon: 'insider'
  },
  {
    title: 'Новости компаний',
    description: 'Актуальные новости с анализом настроений и оценкой влияния на рынок',
    icon: 'news'
  },
  {
    title: 'Портфель и позиции',
    description: 'Управление портфелем с детальным отслеживанием всех позиций и их характеристик',
    icon: 'portfolio'
  },
  {
    title: 'Опционная аналитика',
    description: 'Анализ опционных греков, волатильности и построение профилей риска для опционных стратегий',
    icon: 'options'
  }
]

export const Data = () => {
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
                Data Module • Active
              </span>
            </div>

            {/* Заголовок */}
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              Модуль анализа данных
            </h2>
            <p className="text-lg sm:text-xl text-cyan-100/80 max-w-3xl mx-auto leading-relaxed font-light tracking-wide mb-16">
              Комплексная система для работы с
              <span className="text-cyan-200 font-normal"> финансовыми данными</span>,
              их структурирования и кэширования
              <span className="block mt-2 text-cyan-300/90 font-medium">Полный набор метрик для принятия решений</span>
            </p>
          </div>

          {/* Скриншот платформы */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mb-20 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-500" />
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.15)] group-hover:border-cyan-500/40 group-hover:shadow-[0_0_50px_rgba(6,182,212,0.25)] transition-all duration-500">
                <img 
                  src="/data.jpg" 
                  alt="AI Hedge Fund Platform" 
                  className="w-full h-auto rounded-2xl"
                />
                {/* Неоновый оверлей */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-transparent to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500" />
                {/* Блики */}
                <div className="absolute -inset-x-1/2 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent group-hover:via-cyan-400/70 transition-all duration-500" />
                <div className="absolute -inset-x-1/2 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent group-hover:via-blue-400/70 transition-all duration-500" />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <DataMetric
                key={index}
                title={metric.title}
                description={metric.description}
                icon={getMetricIcon(metric.icon)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
