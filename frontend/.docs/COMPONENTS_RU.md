# Компоненты фронтенд приложения

## Portfolio

### PortfolioSummary
```typescript
interface PortfolioSummaryProps {
  cash: number;
  totalValue: number;
  performance: Performance;
}

// Отображает общую информацию о портфеле:
// - Доступные средства
// - Общая стоимость портфеля
// - Показатели доходности
```

### PositionsList
```typescript
interface PositionsListProps {
  positions: Record<string, Position>;
  onPositionClick: (ticker: string) => void;
}

// Отображает список всех позиций:
// - Тикер
// - Количество
// - Текущая цена
// - P&L
```

### PerformanceChart
```typescript
interface PerformanceChartProps {
  data: PerformanceData[];
  timeframe: 'day' | 'week' | 'month' | 'year';
}

// График производительности портфеля:
// - Линейный график доходности
// - Выбор временного интервала
// - Сравнение с бенчмарком
```

## Analysis

### FundamentalAnalysis
```typescript
interface FundamentalAnalysisProps {
  ticker: string;
  fundamentals: FundamentalData;
}

// Отображает фундаментальные показатели:
// - Финансовые коэффициенты
// - Рост выручки и прибыли
// - Долговая нагрузка
```

### TechnicalAnalysis
```typescript
interface TechnicalAnalysisProps {
  ticker: string;
  technicalData: TechnicalData;
}

// Технический анализ:
// - Графики цен
// - Индикаторы
// - Сигналы
```

### SentimentAnalysis
```typescript
interface SentimentAnalysisProps {
  ticker: string;
  sentimentData: SentimentData;
}

// Анализ настроений:
// - Новостной фон
// - Инсайдерские сделки
// - Общий сентимент
```

## Charts

### CandlestickChart
```typescript
interface CandlestickChartProps {
  data: OHLCV[];
  indicators?: Indicator[];
  onIntervalChange: (interval: string) => void;
}

// График свечей:
// - OHLCV данные
// - Технические индикаторы
// - Временные интервалы
```

### IndicatorChart
```typescript
interface IndicatorChartProps {
  data: IndicatorData[];
  type: 'RSI' | 'MACD' | 'BB';
}

// График индикатора:
// - Значения индикатора
// - Сигнальные линии
// - Зоны перекупленности/перепроданности
```

## Common

### Header
```typescript
interface HeaderProps {
  title: string;
  onMenuClick: () => void;
  user?: User;
}

// Верхняя панель:
// - Название приложения
// - Меню навигации
// - Профиль пользователя
```

### Sidebar
```typescript
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

// Боковое меню:
// - Навигация
// - Фильтры
// - Настройки
```

### LoadingSpinner
```typescript
interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

// Индикатор загрузки:
// - Анимация загрузки
// - Настраиваемый размер
// - Настраиваемый цвет
```

## Формы

### TickerSearch
```typescript
interface TickerSearchProps {
  onSearch: (ticker: string) => void;
  suggestions?: string[];
}

// Поиск тикеров:
// - Автодополнение
// - История поиска
// - Валидация
```

### TradeForm
```typescript
interface TradeFormProps {
  ticker: string;
  type: 'buy' | 'sell';
  onSubmit: (order: Order) => void;
}

// Форма создания ордера:
// - Выбор типа ордера
// - Количество
// - Цена
```

## Модальные окна

### ConfirmationDialog
```typescript
interface ConfirmationDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

// Диалог подтверждения:
// - Заголовок
// - Сообщение
// - Кнопки действий
```

### ErrorDialog
```typescript
interface ErrorDialogProps {
  isOpen: boolean;
  error: Error;
  onClose: () => void;
}

// Диалог ошибки:
// - Сообщение об ошибке
// - Стек ошибки
// - Действия по исправлению
```

## Стилизация

### Темы
```typescript
interface Theme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  error: string;
}

// Настройки темы:
// - Цветовая схема
// - Типографика
// - Отступы
```

### Адаптивность
```typescript
const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

// Медиа-запросы:
// - Мобильные устройства
// - Планшеты
// - Десктоп
```

## Утилиты

### Форматирование
```typescript
// Форматирование чисел
formatNumber(value: number, decimals?: number): string
formatCurrency(value: number, currency?: string): string
formatPercentage(value: number): string

// Форматирование дат
formatDate(date: Date, format?: string): string
formatTimeAgo(date: Date): string
```

### Валидация
```typescript
// Валидация форм
validateTicker(ticker: string): boolean
validateQuantity(quantity: number): boolean
validatePrice(price: number): boolean
```
