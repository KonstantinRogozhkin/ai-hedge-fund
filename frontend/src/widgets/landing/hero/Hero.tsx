import { Container } from '../../../shared/ui/components/Container'
import { Button } from '../../../shared/ui/components/Button'

export const Hero = () => {
  return (
    <div className="relative bg-[#080C14] text-white py-28 overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        {/* Основной градиентный фон */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A2F] via-[#0F172A] to-[#0A0F1F]" />
        
        {/* Кибер-сетка */}
        <div className="absolute inset-0 bg-[url('/cyber-grid.svg')] bg-center opacity-[0.07] animate-pulse" />
        
        {/* Неоновые акценты */}
        <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-gradient-to-br from-cyan-500/[0.05] via-blue-500/[0.05] to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-purple-500/[0.05] via-indigo-500/[0.05] to-transparent blur-3xl" />
      </div>

      {/* Анимированные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Бегущие линии */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-scan-line" />
          <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-scan-line-delayed" />
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent animate-scan-line" />
        </div>
        
        {/* Вертикальные линии */}
        <div className="absolute left-1/4 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute right-1/4 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
      </div>

      {/* Матричный эффект */}
      <div className="absolute inset-0 mix-blend-overlay opacity-5">
        <div className="h-full w-full bg-[url('/matrix-pattern.svg')] bg-repeat animate-matrix" />
      </div>
      
      <Container>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            {/* Статус */}
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-cyan-950/40 backdrop-blur-xl mb-8 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)] group hover:border-cyan-500/40 transition-all duration-300">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500/10 mr-2.5">
                <span className="animate-ping w-2 h-2 rounded-full bg-cyan-400" />
                <span className="absolute w-2 h-2 rounded-full bg-cyan-500" />
              </span>
              <span className="text-sm font-medium bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300">
                AI Trading System v2.5 • Live
              </span>
            </div>

            {/* Заголовок */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              Spy2Money AI
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl mt-3 inline-block font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Хедж-фонд, управляемый AI Агентами
              </span>
            </h1>

            {/* Описание */}
            <p className="text-lg sm:text-xl text-cyan-100/80 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              Используем различных AI-агентов для анализа рынка
              <span className="text-cyan-200 font-normal"> и принятия эффективных инвестиционных решений</span>
              <span className="block mt-2 text-cyan-300/90 font-medium">Будущее трейдинга уже здесь</span>
            </p>

            {/* Скриншот платформы */}
            <div className="relative mt-12 mb-14 max-w-5xl mx-auto">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.15)] bg-[#0A1A2F]">
                {/* Блик на стекле */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
                
                {/* Скриншот */}
                <div className="relative w-full h-full">
                  <img
                    src="/main.png"
                    alt="Spy2Money AI Trading Platform"
                    className="w-full h-auto"
                  />
                  {/* Эффект затухания */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% via-[#0A1A2F]/80 via-75% to-[#0A1A2F]" />
                </div>
                
                {/* Блики по краям */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0A1A2F] to-transparent" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0A1A2F] to-transparent" />
              </div>
            </div>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-base font-semibold rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Открыть торговый счет</span>
                <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/50 rounded-lg bg-cyan-950/30 hover:bg-cyan-900/40 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/10 backdrop-blur-sm transition-all duration-300"
              >
                Демонстрация платформы
              </Button>
            </div>


          </div>
        </div>
      </Container>
    </div>
  )
}
