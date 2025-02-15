import { Container } from '../../../shared/ui/components/Container'
import { motion } from 'framer-motion'

interface NodeProps {
  x: number
  y: number
  width: number
  height: number
  title: string
  type: 'start' | 'agent' | 'manager' | 'action'
}

const Node = ({ x, y, width, height, title, type }: NodeProps) => {
  const colors = {
    start: "stroke-cyan-400 fill-[#0F1A2F]/90",
    agent: "stroke-yellow-400 fill-[#1A1A0F]/90",
    manager: "stroke-blue-400 fill-[#0F1A2F]/90",
    action: title.toLowerCase().includes('sell') || title.toLowerCase().includes('short')
      ? "stroke-red-400 fill-[#2F1515]/90"
      : title.toLowerCase().includes('hold')
      ? "stroke-blue-400 fill-[#0F1A2F]/90"
      : "stroke-green-400 fill-[#152A1D]/90"
  }

  return (
    <g className="transition-transform duration-300 hover:scale-105">
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={8}
        className={`${colors[type]} stroke-[1.5]`}
        filter="url(#neon-glow)"
      />
      <text
        x={x + width / 2}
        y={y + height / 2}
        className="text-[13px] font-medium fill-white text-center select-none"
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {title}
      </text>
    </g>
  )
}

interface ConnectorProps {
  from: { x: number; y: number }
  to: { x: number; y: number }
  label?: string
}

const Connector = ({ from, to, label }: ConnectorProps) => {
  return (
    <g>
      <path
        d={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
        className="stroke-cyan-400/40 stroke-[1.5]"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
      {label && (
        <text
          x={(from.x + to.x) / 2}
          y={(from.y + to.y) / 2 - 8}
          className="text-[11px] fill-cyan-400/90 text-center font-medium select-none"
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {label}
        </text>
      )}
    </g>
  )
}

export const Architecture = () => {
  return (
    <div className="relative bg-[#080C14] text-white py-20 overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A2F] via-[#0F172A] to-[#0A0F1F]" />
        <div className="absolute inset-0 bg-[url('/cyber-grid.svg')] bg-center opacity-[0.07]" />
      </div>

      <Container>
        <div className="relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-950/40 backdrop-blur-xl mb-8 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 mr-2.5">
                <span className="animate-ping w-2 h-2 rounded-full bg-blue-400" />
                <span className="absolute w-2 h-2 rounded-full bg-blue-500" />
              </span>
              <span className="text-sm font-medium text-blue-300">
                System Architecture • Active
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Многоагентная архитектура
            </h2>
            <p className="text-lg text-blue-100/80 max-w-3xl mx-auto leading-relaxed mb-16">
              Система принятия решений на основе
              <span className="text-blue-200 font-medium"> коллективного интеллекта </span>
              специализированных агентов
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative max-w-5xl mx-auto bg-slate-900/50 rounded-2xl border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.15)] overflow-hidden backdrop-blur-sm"
          >
            <div className="p-8">
              <svg
                viewBox="0 0 900 400"
                className="w-full h-auto"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <marker
                    id="arrowhead"
                    markerWidth="6"
                    markerHeight="4"
                    refX="6"
                    refY="2"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 6 2, 0 4"
                      className="fill-cyan-400/50"
                    />
                  </marker>
                </defs>

                {/* Центральная надпись */}


                {/* Start */}
                <Node x={50} y={170} width={80} height={40} title="Start" type="start" />

                {/* Агенты */}
                <Node x={180} y={50} width={160} height={40} title="Bill Ackman Agent" type="agent" />
                <Node x={180} y={100} width={160} height={40} title="Warren Buffett Agent" type="agent" />
                <Node x={180} y={150} width={160} height={40} title="Fundamentals Agent" type="agent" />
                <Node x={180} y={200} width={160} height={40} title="Sentiment Agent" type="agent" />
                <Node x={180} y={250} width={160} height={40} title="Technical Agent" type="agent" />
                <Node x={180} y={300} width={160} height={40} title="Valuation Agent" type="agent" />

                {/* Менеджеры */}
                <Node x={450} y={170} width={120} height={40} title="Risk Manager" type="manager" />
                <Node x={650} y={170} width={120} height={40} title="Portfolio Manager" type="manager" />

                {/* Облако решения */}
                <path
                  d="M 650 280 C 630 280, 620 270, 620 260 C 620 250, 630 240, 640 240 C 645 230, 655 230, 660 235 C 670 225, 685 225, 690 235 C 700 230, 710 235, 715 245 C 725 245, 730 255, 730 260 C 730 270, 720 280, 710 280 Z"
                  className="fill-gray-700/50 stroke-gray-400/50"
                />
                <text
                  x="675"
                  y="260"
                  className="text-[11px] fill-gray-300 text-center font-medium select-none"
                  dominantBaseline="middle"
                  textAnchor="middle"
                >
                  make trading
                </text>
                <text
                  x="675"
                  y="272"
                  className="text-[11px] fill-gray-300 text-center font-medium select-none"
                  dominantBaseline="middle"
                  textAnchor="middle"
                >
                  decision
                </text>

                {/* Действия */}
                <Node x={800} y={50} width={80} height={35} title="Buy" type="action" />
                <Node x={800} y={100} width={80} height={35} title="Cover" type="action" />
                <Node x={800} y={250} width={80} height={35} title="Sell" type="action" />
                <Node x={800} y={300} width={80} height={35} title="Short" type="action" />
                <Node x={800} y={170} width={80} height={35} title="Hold" type="action" />

                {/* Start -> Agents */}
                <Connector from={{ x: 130, y: 190 }} to={{ x: 180, y: 70 }} label="[1] pick agents" />
                <Connector from={{ x: 130, y: 190 }} to={{ x: 180, y: 120 }} />
                <Connector from={{ x: 130, y: 190 }} to={{ x: 180, y: 170 }} />
                <Connector from={{ x: 130, y: 190 }} to={{ x: 180, y: 220 }} />
                <Connector from={{ x: 130, y: 190 }} to={{ x: 180, y: 270 }} />
                <Connector from={{ x: 130, y: 190 }} to={{ x: 180, y: 320 }} />

                {/* Agents -> Risk Manager */}
                <Connector from={{ x: 340, y: 70 }} to={{ x: 450, y: 190 }} label="[2] trading signals" />
                <Connector from={{ x: 340, y: 120 }} to={{ x: 450, y: 190 }} />
                <Connector from={{ x: 340, y: 170 }} to={{ x: 450, y: 190 }} />
                <Connector from={{ x: 340, y: 220 }} to={{ x: 450, y: 190 }} />
                <Connector from={{ x: 340, y: 270 }} to={{ x: 450, y: 190 }} />
                <Connector from={{ x: 340, y: 320 }} to={{ x: 450, y: 190 }} />

                {/* Risk Manager -> Portfolio Manager */}
                <Connector from={{ x: 570, y: 190 }} to={{ x: 650, y: 190 }} label="[3] risk signals" />

                {/* Portfolio Manager -> Actions */}
                <Connector from={{ x: 770, y: 190 }} to={{ x: 800, y: 70 }} label="[4] take action" />
                <Connector from={{ x: 770, y: 190 }} to={{ x: 800, y: 120 }} />
                <Connector from={{ x: 770, y: 190 }} to={{ x: 800, y: 270 }} />
                <Connector from={{ x: 770, y: 190 }} to={{ x: 800, y: 320 }} />

                {/* Вертикальные направляющие */}
                <line x1="130" y1="30" x2="130" y2="350" className="stroke-cyan-400/5 stroke-[1]" />
                <line x1="340" y1="30" x2="340" y2="350" className="stroke-cyan-400/5 stroke-[1]" />
                <line x1="770" y1="30" x2="770" y2="350" className="stroke-cyan-400/5 stroke-[1]" />
              </svg>
            </div>

            {/* Легенда */}
            <div className="flex justify-center gap-8 p-4 border-t border-blue-500/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <span className="text-sm text-slate-300">Агенты анализа</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-400/70" />
                <span className="text-sm text-slate-300">Менеджеры системы</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
                <span className="text-sm text-slate-300">Торговые действия</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
