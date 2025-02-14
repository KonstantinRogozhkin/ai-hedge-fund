interface AgentCardProps {
  title: string
  description: string
  features?: string[]
  icon: React.ReactNode
  children?: React.ReactNode
}

export const AgentCard = ({ title, description, features = [], icon, children }: AgentCardProps) => {
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
          </div>
        </div>

        {/* Описание */}
        <p className="text-cyan-100/70 mb-4 leading-relaxed">{description}</p>

        {/* Особенности */}
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-cyan-200/60 group-hover:text-cyan-200/80 transition-all duration-300">
                <span className="mr-2 text-cyan-500">•</span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Дополнительный контент */}
        {children}
      </div>
    </div>
  )
}
