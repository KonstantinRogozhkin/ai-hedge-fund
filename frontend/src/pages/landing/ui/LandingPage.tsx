import { Hero } from '@landing-widgets/hero/Hero'
import { Features } from '@landing-widgets/features/Features'
import { Agents } from '@landing-widgets/agents/Agents'
import { Architecture } from '@landing-widgets/architecture/Architecture'
import { Data } from '@landing-widgets/data/Data'
import { Research } from '@landing-widgets/research/Research'

export const LandingPage = () => (
  <main className="flex flex-col min-h-screen selection:bg-blue-900/50 selection:text-blue-50 cyberpunk-bg">
    {/* Фоновые эффекты */}
    <div className="fixed inset-0 pointer-events-none">
      {/* Матричный фон */}
      <div className="absolute inset-0 matrix-bg" />
      
      {/* Сетка */}
      <div className="absolute inset-0 bg-[url('/cyber-grid.svg')] bg-center opacity-[0.07] animate-pulse" />
      
      {/* Голографические блики */}
      <div className="absolute inset-0">
        <div className="absolute top-0 w-full h-1/3 bg-gradient-to-b from-cyan-500/[0.02] to-transparent" />
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-blue-500/[0.02] to-transparent" />
      </div>
      
      {/* Сканирующие линии */}
      <div className="absolute inset-0">
        <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-scan-line" style={{ top: '25%' }} />
        <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-scan-line-delayed" style={{ top: '75%' }} />
      </div>
      
      {/* Вертикальные линии */}
      <div className="absolute inset-0 flex justify-between">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />
      </div>
    </div>

    {/* Контент */}
    <div className="relative z-10">
      <Hero />
      <Agents />
      <Data />
      <Features />
      <Architecture />
      <Research />
    </div>

    {/* Неоновая рамка */}
    <div className="fixed inset-0 pointer-events-none border border-cyan-500/10 cyberpunk-border" />
  </main>
)
