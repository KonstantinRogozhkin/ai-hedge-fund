# API Интеграция

## HTTP API

### Endpoints

#### Portfolio API
```typescript
// Получение данных портфеля
GET /api/portfolio
Response {
  cash: number;
  positions: {
    [ticker: string]: {
      quantity: number;
      averagePrice: number;
      currentPrice: number;
      value: number;
    }
  };
  performance: {
    daily: number;
    weekly: number;
    monthly: number;
    yearly: number;
  };
}

// Создание ордера
POST /api/orders
Request {
  ticker: string;
  type: 'buy' | 'sell';
  quantity: number;
  price?: number;  // Для лимитных ордеров
}
Response {
  orderId: string;
  status: 'pending' | 'filled' | 'rejected';
}
```

#### Analysis API
```typescript
// Получение сигналов по тикеру
GET /api/signals/{ticker}
Response {
  fundamental: {
    recommendation: 'buy' | 'sell' | 'hold';
    metrics: {
      pe: number;
      pb: number;
      roe: number;
    };
    score: number;
  };
  technical: {
    trend: string;
    indicators: {
      rsi: number;
      macd: {
        value: number;
        signal: number;
      };
    };
    score: number;
  };
  sentiment: {
    newsScore: number;
    insiderScore: number;
    overallScore: number;
  };
}

// Запуск анализа тикера
POST /api/analyze
Request {
  ticker: string;
  type: 'fundamental' | 'technical' | 'sentiment' | 'all';
}
Response {
  analysisId: string;
  status: 'started';
}
```

#### Market Data API
```typescript
// Получение исторических данных
GET /api/market-data/{ticker}
Query {
  interval: '1d' | '1h' | '15m';
  from: string;  // ISO date
  to: string;    // ISO date
}
Response {
  ticker: string;
  data: Array<{
    timestamp: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
  }>;
}

// Получение текущих цен
GET /api/quotes
Query {
  tickers: string[];  // Список тикеров
}
Response {
  [ticker: string]: {
    price: number;
    change: number;
    changePercent: number;
  };
}
```

## WebSocket API

### Соединение
```typescript
const ws = new WebSocket('ws://localhost:8000/ws');
```

### События

#### Portfolio Updates
```typescript
// Обновление портфеля
{
  type: 'portfolio_update',
  data: {
    cash: number;
    positions: Record<string, Position>;
    performance: Performance;
  }
}

// Обновление позиции
{
  type: 'position_update',
  data: {
    ticker: string;
    quantity: number;
    averagePrice: number;
    currentPrice: number;
    value: number;
  }
}

// Исполнение ордера
{
  type: 'order_execution',
  data: {
    orderId: string;
    status: 'filled' | 'rejected';
    details: {
      ticker: string;
      quantity: number;
      price: number;
      timestamp: number;
    }
  }
}
```

#### Market Data Updates
```typescript
// Обновление цены
{
  type: 'price_update',
  data: {
    ticker: string;
    price: number;
    change: number;
    changePercent: number;
    timestamp: number;
  }
}

// Обновление индикаторов
{
  type: 'indicator_update',
  data: {
    ticker: string;
    indicators: {
      rsi: number;
      macd: {
        value: number;
        signal: number;
      };
      // другие индикаторы
    }
  }
}
```

#### Analysis Updates
```typescript
// Новый сигнал
{
  type: 'signal_update',
  data: {
    ticker: string;
    signalType: 'fundamental' | 'technical' | 'sentiment';
    signal: 'buy' | 'sell' | 'hold';
    confidence: number;
    reasoning: string;
  }
}

// Завершение анализа
{
  type: 'analysis_complete',
  data: {
    analysisId: string;
    ticker: string;
    results: {
      fundamental: FundamentalAnalysis;
      technical: TechnicalAnalysis;
      sentiment: SentimentAnalysis;
    }
  }
}
```

## Обработка ошибок

### HTTP Ошибки
```typescript
interface APIError {
  status: number;
  code: string;
  message: string;
  details?: any;
}

// Пример ответа с ошибкой
{
  status: 400,
  code: 'INVALID_TICKER',
  message: 'Invalid ticker symbol',
  details: {
    ticker: 'ABC',
    allowedFormat: '^[A-Z]{1,5}$'
  }
}
```

### WebSocket Ошибки
```typescript
// Ошибка соединения
{
  type: 'error',
  data: {
    code: 'CONNECTION_ERROR',
    message: 'WebSocket connection failed',
    reconnectIn: 5000  // ms
  }
}

// Ошибка данных
{
  type: 'error',
  data: {
    code: 'DATA_ERROR',
    message: 'Invalid message format',
    originalMessage: {}
  }
}
```

## Безопасность

### Аутентификация
```typescript
// JWT токен в заголовке
headers: {
  'Authorization': 'Bearer <token>'
}

// Обновление токена
POST /api/refresh-token
Request {
  refreshToken: string;
}
Response {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}
```

### Rate Limiting
```typescript
// Заголовки ответа
headers: {
  'X-RateLimit-Limit': '100',
  'X-RateLimit-Remaining': '95',
  'X-RateLimit-Reset': '1614556800'
}
```

## Кэширование

### HTTP Кэширование
```typescript
// Заголовки кэширования
headers: {
  'Cache-Control': 'public, max-age=300',
  'ETag': '"33a64df551425fcc55e4d42a148795d9f25f89d4"'
}
```

### Локальное кэширование
```typescript
interface CacheConfig {
  ttl: number;  // Time to live in ms
  maxSize: number;  // Maximum cache size
  updateInterval: number;  // Update interval for real-time data
}
```
