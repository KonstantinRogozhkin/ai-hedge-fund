import { useState } from 'react'
import { motion } from 'framer-motion'
import { AgentCard } from '../AgentCard'
import { Tooltip, Badge, Card, Progress, Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/components'

interface MetricProps {
  label: string
  value: number
  threshold: number
  unit?: string
}

const Metric = ({ label, value, threshold, unit = '%' }: MetricProps) => {
  const isGood = value >= threshold
  return (
    <div className="flex items-center justify-between p-2">
      <Tooltip content={`Пороговое значение: ${threshold}${unit}`}>
        <span className="text-sm text-muted-foreground">{label}</span>
      </Tooltip>
      <div className="flex items-center gap-2">
        <span className={`font-medium ${isGood ? 'text-green-500' : 'text-red-500'}`}>
          {value}
          {unit}
        </span>
        {isGood ? (
          <Badge variant="success" className="h-5 w-5">✓</Badge>
        ) : (
          <Badge variant="destructive" className="h-5 w-5">×</Badge>
        )}
      </div>
    </div>
  )
}

export const FundamentalsAgent = () => {
  const [activeTab, setActiveTab] = useState('profitability')
  
  const icon = (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  )

  // Моковые данные для демонстрации
  const mockData = {
    profitability: {
      roe: 18,
      netMargin: 22,
      operatingMargin: 16
    },
    growth: {
      revenue: 12,
      earnings: 15,
      bookValue: 11
    },
    health: {
      currentRatio: 1.8,
      debtToEquity: 0.4,
      fcfToEps: 0.9
    },
    ratios: {
      pe: 20,
      pb: 2.5,
      ps: 4
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AgentCard
        title="Fundamentals Agent"
        description="Анализирует фундаментальные показатели компаний для оценки их финансового здоровья"
        features={[
          'Анализ прибыльности',
          'Анализ роста',
          'Финансовое здоровье',
          'Оценочные мультипликаторы'
        ]}
        icon={icon}
      >
        <Card className="mt-4 p-4">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profitability">Прибыльность</TabsTrigger>
              <TabsTrigger value="growth">Рост</TabsTrigger>
              <TabsTrigger value="health">Здоровье</TabsTrigger>
              <TabsTrigger value="ratios">Мультипликаторы</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profitability" className="mt-4">
              <Metric label="Return on Equity (ROE)" value={mockData.profitability.roe} threshold={15} />
              <Metric label="Чистая маржа" value={mockData.profitability.netMargin} threshold={20} />
              <Metric label="Операционная маржа" value={mockData.profitability.operatingMargin} threshold={15} />
            </TabsContent>
            
            <TabsContent value="growth" className="mt-4">
              <Metric label="Рост выручки" value={mockData.growth.revenue} threshold={10} />
              <Metric label="Рост прибыли" value={mockData.growth.earnings} threshold={10} />
              <Metric label="Рост балансовой стоимости" value={mockData.growth.bookValue} threshold={10} />
            </TabsContent>
            
            <TabsContent value="health" className="mt-4">
              <Metric label="Коэффициент текущей ликвидности" value={mockData.health.currentRatio} threshold={1.5} unit="x" />
              <Metric label="Соотношение долга к капиталу" value={mockData.health.debtToEquity} threshold={0.5} unit="x" />
              <Metric label="FCF/EPS" value={mockData.health.fcfToEps} threshold={0.8} unit="x" />
            </TabsContent>
            
            <TabsContent value="ratios" className="mt-4">
              <Metric label="P/E" value={mockData.ratios.pe} threshold={25} unit="x" />
              <Metric label="P/B" value={mockData.ratios.pb} threshold={3} unit="x" />
              <Metric label="P/S" value={mockData.ratios.ps} threshold={5} unit="x" />
            </TabsContent>
          </Tabs>
          
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Общая оценка</span>
              <span className="text-sm text-green-500">75%</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
        </Card>
      </AgentCard>
    </motion.div>
  )
} 