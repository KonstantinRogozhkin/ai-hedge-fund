import { Container } from '../../../shared/ui/components/Container'

export const Research = () => {
  return (
    <section className="relative bg-[#080C14] text-white py-28 overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A2F] via-[#0F172A] to-[#0A0F1F]" />
        <div className="absolute inset-0 bg-[url('/cyber-grid.svg')] bg-center opacity-[0.07] animate-pulse" />
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-blue-500/[0.05] via-cyan-500/[0.05] to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-sky-500/[0.05] via-blue-500/[0.05] to-transparent blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            {/* Статус секции */}
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-950/40 backdrop-blur-xl mb-8 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)] group hover:border-blue-500/40 transition-all duration-300">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 mr-2.5">
                <span className="animate-ping w-2 h-2 rounded-full bg-blue-400" />
                <span className="absolute w-2 h-2 rounded-full bg-blue-500" />
              </span>
              <span className="text-sm font-medium bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                Research • 2024
              </span>
            </div>

            {/* Заголовок */}
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-br from-blue-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              Исследования подтверждают превосходство
            </h2>
            <p className="text-lg sm:text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed font-light tracking-wide mb-16">
              Многоагентные системы на основе LLM демонстрируют значительные преимущества в финансовом анализе
              <span className="block mt-2 text-blue-300/90 font-medium">Подтверждено исследованиями TradingAgents, FinCon и практикой хедж-фондов</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Специализация агентов */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-300"></div>
              <div className="relative bg-gradient-to-br from-[#0A1A2F]/95 to-[#0F172A]/95 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/20 shadow-[0_0_25px_rgba(59,130,246,0.1)] group-hover:border-blue-500/40 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Специализация агентов</h3>
                </div>
                <p className="text-blue-100/80 mb-4">Каждый агент фокусируется на своей области: фундаментальный анализ, технический анализ, анализ настроений и управление рисками.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-blue-200/90">
                    <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Прирост доходности 24-28%
                  </li>
                  <li className="flex items-center text-blue-200/90">
                    <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Коэффициент Шарпа до 8.21
                  </li>
                </ul>
              </div>
            </div>

            {/* Коллективный интеллект */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-300"></div>
              <div className="relative bg-gradient-to-br from-[#0A1A2F]/95 to-[#0F172A]/95 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/20 shadow-[0_0_25px_rgba(59,130,246,0.1)] group-hover:border-blue-500/40 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Коллективный интеллект</h3>
                </div>
                <p className="text-blue-100/80 mb-4">Агенты взаимодействуют через структурированные дебаты и обмен данными, что улучшает качество решений.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-blue-200/90">
                    <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Снижение ошибок на 30%
                  </li>
                  <li className="flex items-center text-blue-200/90">
                    <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Максимальная просадка 0.91%
                  </li>
                </ul>
              </div>
            </div>

            {/* Адаптивность */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-300"></div>
              <div className="relative bg-gradient-to-br from-[#0A1A2F]/95 to-[#0F172A]/95 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/20 shadow-[0_0_25px_rgba(59,130,246,0.1)] group-hover:border-blue-500/40 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Адаптивность</h3>
                </div>
                <p className="text-blue-100/80 mb-4">Агенты обновляют стратегии через механизм самокритики и динамически адаптируются к изменениям рынка.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-blue-200/90">
                    <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Рост доходности на 15-20%
                  </li>
                  <li className="flex items-center text-blue-200/90">
                    <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Быстрая адаптация к трендам
                  </li>
                </ul>
              </div>
            </div>

            {/* Масштабируемость */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-300"></div>
              <div className="relative bg-gradient-to-br from-[#0A1A2F]/95 to-[#0F172A]/95 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/20 shadow-[0_0_25px_rgba(59,130,246,0.1)] group-hover:border-blue-500/40 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Масштабируемость</h3>
                </div>
                <p className="text-blue-100/80 mb-4">Распределенная архитектура позволяет анализировать множество активов и стратегий параллельно.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-blue-200/90">
                    <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Анализ тысяч активов
                  </li>
                  <li className="flex items-center text-blue-200/90">
                    <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Оптимизация ресурсов на 40%
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Источники */}
          <div className="mt-16 text-center">
            <p className="text-blue-200/60 text-sm">
              Данные подтверждены исследованиями TradingAgents, FinCon, MSPM и практическим применением в ведущих хедж-фондах
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <a href="https://arxiv.org/abs/2402.01680" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                arXiv:2402.01680
              </a>
              <a href="https://arxiv.org/abs/2401.12474" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                arXiv:2401.12474
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 