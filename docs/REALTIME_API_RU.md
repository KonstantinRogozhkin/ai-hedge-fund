# Realtime API для AI Hedge Fund

## Архитектура системы

### 1. Backend (FastAPI + WebSocket)

#### Структура API
```python
from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from typing import List

app = FastAPI()

# Включаем CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Хранение активных соединений
class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def broadcast(self, message: dict):
        for connection in self.active_connections:
            await connection.send_json(message)

manager = ConnectionManager()
```

#### REST Endpoints
```python
@app.get("/api/portfolio")
async def get_portfolio():
    """Получение текущего состояния портфеля"""
    return {
        "cash": 1000000,
        "positions": {...},
        "performance": {...}
    }

@app.get("/api/signals/{ticker}")
async def get_signals(ticker: str):
    """Получение сигналов по конкретному тикеру"""
    return {
        "fundamentals": {...},
        "technical": {...},
        "sentiment": {...}
    }

@app.post("/api/analyze")
async def analyze_ticker(ticker: str):
    """Запуск анализа для нового тикера"""
    # Асинхронный запуск анализа
    background_tasks.add_task(run_analysis, ticker)
    return {"status": "Analysis started"}
```

#### WebSocket Endpoints
```python
@app.websocket("/ws/portfolio")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            # Получаем обновления портфеля
            portfolio_update = await get_portfolio_update()
            # Отправляем клиентам
            await manager.broadcast({
                "type": "portfolio_update",
                "data": portfolio_update
            })
            await asyncio.sleep(1)
    except WebSocketDisconnect:
        manager.disconnect(websocket)

@app.websocket("/ws/signals/{ticker}")
async def ticker_signals(websocket: WebSocket, ticker: str):
    await manager.connect(websocket)
    try:
        while True:
            # Получаем обновления сигналов
            signals = await get_ticker_signals(ticker)
            await websocket.send_json({
                "type": "signals_update",
                "ticker": ticker,
                "data": signals
            })
            await asyncio.sleep(1)
    except WebSocketDisconnect:
        manager.disconnect(websocket)
```

### 2. Frontend (React + TypeScript)

#### Структура проекта
```
frontend/
├── src/
│   ├── components/
│   │   ├── Portfolio/
│   │   │   ├── PortfolioSummary.tsx
│   │   │   ├── PositionsList.tsx
│   │   │   └── PerformanceChart.tsx
│   │   ├── Analysis/
│   │   │   ├── FundamentalAnalysis.tsx
│   │   │   ├── TechnicalAnalysis.tsx
│   │   │   └── SentimentAnalysis.tsx
│   │   └── Common/
│   │       ├── Header.tsx
│   │       └── Sidebar.tsx
│   ├── services/
│   │   ├── api.ts
│   │   └── websocket.ts
│   └── store/
│       ├── portfolioSlice.ts
│       └── analysisSlice.ts
```

#### WebSocket Service
```typescript
// services/websocket.ts
export class WebSocketService {
  private ws: WebSocket;
  private subscribers: Map<string, Function[]>;

  constructor(url: string) {
    this.ws = new WebSocket(url);
    this.subscribers = new Map();

    this.ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      this.notifySubscribers(message);
    };
  }

  subscribe(type: string, callback: Function) {
    if (!this.subscribers.has(type)) {
      this.subscribers.set(type, []);
    }
    this.subscribers.get(type)?.push(callback);
  }

  private notifySubscribers(message: any) {
    const { type, data } = message;
    this.subscribers.get(type)?.forEach(callback => callback(data));
  }
}
```

#### API Service
```typescript
// services/api.ts
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const api = {
  async getPortfolio() {
    const response = await axios.get(`${API_URL}/portfolio`);
    return response.data;
  },

  async getSignals(ticker: string) {
    const response = await axios.get(`${API_URL}/signals/${ticker}`);
    return response.data;
  },

  async analyzeTicker(ticker: string) {
    const response = await axios.post(`${API_URL}/analyze`, { ticker });
    return response.data;
  }
};
```

#### Redux Store
```typescript
// store/portfolioSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PortfolioState {
  cash: number;
  positions: Record<string, number>;
  performance: Record<string, number>;
}

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    cash: 0,
    positions: {},
    performance: {}
  } as PortfolioState,
  reducers: {
    updatePortfolio(state, action: PayloadAction<PortfolioState>) {
      return { ...state, ...action.payload };
    }
  }
});
```

### 3. Интеграция с существующим кодом

#### Модификация основного процесса
```python
async def run_analysis_loop():
    """Бесконечный цикл анализа"""
    while True:
        # Получаем текущие данные
        portfolio = get_current_portfolio()
        
        # Запускаем анализ
        results = await run_hedge_fund(
            tickers=portfolio["tickers"],
            start_date=get_start_date(),
            end_date=datetime.now().strftime("%Y-%m-%d"),
            portfolio=portfolio,
            show_reasoning=True
        )
        
        # Отправляем результаты через WebSocket
        await manager.broadcast({
            "type": "analysis_update",
            "data": results
        })
        
        # Пауза перед следующим циклом
        await asyncio.sleep(60)  # Обновление каждую минуту
```

#### Очередь задач
```python
from celery import Celery

celery = Celery('ai_hedge_fund')

@celery.task
def analyze_ticker_task(ticker: str):
    """Асинхронный анализ тикера"""
    results = run_hedge_fund(
        tickers=[ticker],
        start_date=get_start_date(),
        end_date=datetime.now().strftime("%Y-%m-%d"),
        portfolio=get_current_portfolio(),
        show_reasoning=True
    )
    
    # Отправка результатов через Redis
    redis_client.publish('analysis_results', json.dumps(results))
```

## Рекомендации по реализации

### 1. Развертывание

#### Docker Compose
```yaml
version: '3.8'
services:
  backend:
    build: ./backend
    ports:
      - "8000:8000"
    environment:
      - REDIS_URL=redis://redis:6379
    depends_on:
      - redis
      - celery

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_API_URL=http://localhost:8000
      - REACT_APP_WS_URL=ws://localhost:8000

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

  celery:
    build: ./backend
    command: celery -A main.celery worker
    depends_on:
      - redis
```

### 2. Масштабирование

#### Nginx конфигурация
```nginx
upstream backend {
    server backend1:8000;
    server backend2:8000;
    server backend3:8000;
}

server {
    listen 80;
    
    location /api {
        proxy_pass http://backend;
    }
    
    location /ws {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

### 3. Мониторинг

#### Prometheus метрики
```python
from prometheus_client import Counter, Histogram

analysis_requests = Counter(
    'analysis_requests_total',
    'Total number of analysis requests'
)

analysis_duration = Histogram(
    'analysis_duration_seconds',
    'Time spent processing analysis'
)
```

### 4. Безопасность

#### JWT аутентификация
```python
from fastapi_jwt_auth import AuthJWT

@app.post("/api/login")
async def login(user: User, Authorize: AuthJWT = Depends()):
    # Проверка учетных данных
    if authenticate_user(user):
        access_token = Authorize.create_access_token(subject=user.username)
        return {"access_token": access_token}
```

## Заключение

### 1. Преимущества
- Realtime обновления через WebSocket
- Масштабируемая архитектура
- Асинхронная обработка
- Отказоустойчивость

### 2. Ограничения
- Задержки при большом количестве подключений
- Потребление ресурсов при частых обновлениях
- Необходимость синхронизации данных

### 3. Следующие шаги
1. Настройка окружения разработки
2. Реализация базового API
3. Создание фронтенд приложения
4. Тестирование производительности
5. Развертывание и мониторинг
