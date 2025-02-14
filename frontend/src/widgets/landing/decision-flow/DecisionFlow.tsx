import { Container } from '../../../shared/ui/components/Container'

const AgentBox = ({ title, x, y, color = '#FFD700', type = 'default' }: { title: string; x: number; y: number; color?: string; type?: 'start' | 'default' | 'action' }) => (
  <g transform={`translate(${x},${y})`} className="transition-transform duration-300 hover:scale-105">
    <defs>
      <filter id={`glow-${type}`} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
        <feFlood floodColor={color} floodOpacity="0.2" result="color"/>
        <feComposite in="color" in2="blur" operator="in" result="shadow"/>
        <feMerge>
          <feMergeNode in="shadow"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <rect
      width="120"
      height="40"
      rx="8"
      fill={color}
      className="shadow-lg transition-all duration-300"
      filter={`url(#glow-${type})`}
      style={{
        filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
      }}
    />
    <rect
      width="120"
      height="40"
      rx="8"
      fill="url(#gradient-${type})"
      fillOpacity="0.6"
      className="transition-opacity duration-300"
    />
    <text
      x="60"
      y="25"
      textAnchor="middle"
      className="text-sm font-semibold select-none"
      fill="#1A1A1A"
      style={{
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
      }}
    >
      {title}
    </text>
  </g>
)

const Arrow = ({ start, end }: { start: [number, number]; end: [number, number] }) => {
  const [x1, y1] = start
  const [x2, y2] = end
  
  // Вычисляем контрольные точки для кривой
  const [dx] = [x2 - x1]
  const midX = x1 + dx * 0.5
  
  return (
    <g className="transition-opacity duration-300 hover:opacity-75">
      <path
        d={`M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`}
        fill="none"
        stroke="url(#line-gradient)"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
        className="transition-all duration-300"
      />
    </g>
  )
}

export const DecisionFlow = () => {
  // Функция для создания уникального ID градиента
  const createGradientId = (type: string) => `gradient-${type}`

  // Компонент градиента
  const Gradient = ({ id, color1, color2 }: { id: string; color1: string; color2: string }) => (
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor={color1} />
      <stop offset="100%" stopColor={color2} />
    </linearGradient>
  )
  return (
    <div className="relative bg-[#0B1221] text-white py-20 overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/50 via-blue-950/50 to-slate-950/50" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03]" />
      </div>

      <Container>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Процесс принятия решений
          </h2>

          <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/[0.05] to-blue-500/[0.05] rounded-2xl p-8 backdrop-blur-sm border border-white/10 shadow-2xl relative overflow-hidden transition-all duration-500 hover:border-blue-500/20">
            {/* Декоративные элементы */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-20" />
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <svg
              width="100%"
              height="500"
              viewBox="0 0 800 400"
              fill="none"
              className="max-w-full h-auto"
            >
              {/* Определения градиентов и эффектов */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="url(#line-gradient)" />
                </marker>

                <Gradient id={createGradientId('start')} color1="#94a3b8" color2="#64748b" />
                <Gradient id={createGradientId('default')} color1="#fbbf24" color2="#d97706" />
                <Gradient id="line-gradient" color1="#94a3b8" color2="#475569" />

                {/* Градиенты для действий */}
                <Gradient id={createGradientId('buy')} color1="#22c55e" color2="#16a34a" />
                <Gradient id={createGradientId('sell')} color1="#ef4444" color2="#dc2626" />
                <Gradient id={createGradientId('hold')} color1="#3b82f6" color2="#2563eb" />

                {/* Эффект свечения для облака */}
                <filter id="cloud-glow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feFlood floodColor="#94a3b8" floodOpacity="0.3" />
                  <feComposite in2="blur" operator="in" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Start */}
              <AgentBox title="Start" x={50} y={180} color="#94a3b8" type="start" />

              {/* Agents */}
              <AgentBox title="Bill Ackman Agent" x={220} y={40} />
              <AgentBox title="Warren Buffett Agent" x={220} y={100} />
              <AgentBox title="Fundamentals Agent" x={220} y={160} />
              <AgentBox title="Sentiment Agent" x={220} y={220} />
              <AgentBox title="Technical Agent" x={220} y={280} />
              <AgentBox title="Valuation Agent" x={220} y={340} />

              {/* Risk Manager */}
              <AgentBox title="Risk Manager" x={400} y={180} color="#FFD700" />

              {/* Portfolio Manager */}
              <AgentBox title="Portfolio Manager" x={580} y={180} color="#FFD700" />

              {/* Actions */}
              <AgentBox title="Buy" x={720} y={80} color="#22c55e" type="action" />
              <AgentBox title="Cover" x={720} y={140} color="#22c55e" type="action" />
              <AgentBox title="Sell" x={720} y={200} color="#ef4444" type="action" />
              <AgentBox title="Short" x={720} y={260} color="#ef4444" type="action" />
              <AgentBox title="Hold" x={720} y={320} color="#3b82f6" type="action" />

              {/* Arrows from Start to Agents */}
              <Arrow start={[170, 200]} end={[220, 60]} />
              <Arrow start={[170, 200]} end={[220, 120]} />
              <Arrow start={[170, 200]} end={[220, 180]} />
              <Arrow start={[170, 200]} end={[220, 240]} />
              <Arrow start={[170, 200]} end={[220, 300]} />
              <Arrow start={[170, 200]} end={[220, 360]} />

              {/* Arrows from Agents to Risk Manager */}
              <Arrow start={[340, 60]} end={[400, 200]} />
              <Arrow start={[340, 120]} end={[400, 200]} />
              <Arrow start={[340, 180]} end={[400, 200]} />
              <Arrow start={[340, 240]} end={[400, 200]} />
              <Arrow start={[340, 300]} end={[400, 200]} />
              <Arrow start={[340, 360]} end={[400, 200]} />

              {/* Arrow from Risk Manager to Portfolio Manager */}
              <Arrow start={[520, 200]} end={[580, 200]} />

              {/* Arrows from Portfolio Manager to Actions */}
              <Arrow start={[700, 200]} end={[720, 100]} />
              <Arrow start={[700, 200]} end={[720, 160]} />
              <Arrow start={[700, 200]} end={[720, 220]} />
              <Arrow start={[700, 200]} end={[720, 280]} />
              <Arrow start={[700, 200]} end={[720, 340]} />

              {/* Decision Cloud */}
              <g transform="translate(460,240)" className="transition-transform duration-300 hover:scale-110">
                <ellipse
                  cx="20"
                  cy="10"
                  rx="40"
                  ry="25"
                  fill="url(#cloud-gradient)"
                  stroke="#64748b"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                  filter="url(#cloud-glow)"
                  className="transition-all duration-300"
                />
                <text
                  x="20"
                  y="15"
                  textAnchor="middle"
                  className="text-xs font-medium"
                  fill="#e2e8f0"
                  style={{
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  trading decision
                </text>
              </g>
            </svg>
          </div>
        </div>
      </Container>
    </div>
  )
}
