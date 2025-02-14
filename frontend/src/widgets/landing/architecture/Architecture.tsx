import { Container } from '../../../shared/ui/components/Container'

export const Architecture = () => {
  return (
    <div className="relative bg-[#0B1221] text-white py-20 overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        {/* Градиентный фон */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-slate-950/50 to-blue-950/50" />
        
        {/* Сетка */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03]" />
        
        {/* Градиентные акценты */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/[0.03] to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-500/[0.03] to-transparent" />
      </div>

      <Container>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Многоагентная архитектура принятия решений
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-lg hover:border-blue-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Аналитические модули</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Технический анализ</li>
                <li>• Фундаментальный анализ</li>
                <li>• Сентимент-анализ</li>
                <li>• Оценка активов</li>
                <li>• Стратегии Buffett/Ackman</li>
              </ul>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-lg hover:border-emerald-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">Этапы обработки</h3>
              <ol className="space-y-3 text-slate-300 list-decimal list-inside">
                <li>Параллельный анализ</li>
                <li>Управление рисками</li>
                <li>Оптимизация портфеля</li>
                <li>Исполнение сделок</li>
              </ol>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-lg hover:border-purple-500/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">Преимущества системы</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• 24/7 мониторинг рынков</li>
                <li>• Динамическая адаптация</li>
                <li>• Защита от эмоций</li>
                <li>• Обучение на новых данных</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
