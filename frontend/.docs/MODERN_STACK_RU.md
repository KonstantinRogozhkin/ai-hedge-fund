# Современный стек фронтенд приложения AI Hedge Fund

## Технологический стек

### Основные технологии
- **React + TypeScript**: Основной фреймворк
- **Vite**: Сборка проекта
- **Zustand**: Управление состоянием
- **Radix UI**: Доступные UI компоненты
- **Tailwind CSS**: Утилитарные стили
- **Server-Sent Events**: Стриминг данных

## Управление состоянием (Zustand)

### Store Structure
```typescript
// src/store/usePortfolioStore.ts
import create from 'zustand';

interface PortfolioState {
  cash: number;
  positions: Record<string, Position>;
  isLoading: boolean;
  error: string | null;
  updatePortfolio: (data: Partial<PortfolioState>) => void;
  fetchPortfolio: () => Promise<void>;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  cash: 0,
  positions: {},
  isLoading: false,
  error: null,
  updatePortfolio: (data) => set((state) => ({ ...state, ...data })),
  fetchPortfolio: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch('/api/portfolio');
      const data = await response.json();
      set({ ...data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));
```

## UI Компоненты (Radix UI + Tailwind)

### Dialog Component
```typescript
// src/components/Common/Dialog.tsx
import * as Dialog from '@radix-ui/react-dialog';

export const ConfirmDialog = ({ 
  open, 
  onOpenChange, 
  children 
}: DialogProps) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg">
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
```

### Dropdown Menu
```typescript
// src/components/Common/DropdownMenu.tsx
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const Menu = ({ 
  trigger, 
  items 
}: MenuProps) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger className="outline-none">
      {trigger}
    </DropdownMenu.Trigger>
    <DropdownMenu.Portal>
      <DropdownMenu.Content className="bg-white rounded-md shadow-lg p-2">
        {items.map((item) => (
          <DropdownMenu.Item
            key={item.id}
            className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            onClick={item.onClick}
          >
            {item.label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);
```

## Server-Sent Events (SSE)

### SSE Client
```typescript
// src/services/sse.ts
export class SSEClient {
  private eventSource: EventSource;
  private reconnectAttempts: number = 0;
  private maxReconnectAttempts: number = 5;

  constructor(url: string) {
    this.connect(url);
  }

  private connect(url: string) {
    this.eventSource = new EventSource(url);
    
    this.eventSource.onopen = () => {
      console.log('SSE connection established');
      this.reconnectAttempts = 0;
    };

    this.eventSource.onerror = (error) => {
      console.error('SSE connection error:', error);
      this.eventSource.close();
      
      if (this.reconnectAttempts < this.maxReconnectAttempts) {
        this.reconnectAttempts++;
        setTimeout(() => this.connect(url), 1000 * this.reconnectAttempts);
      }
    };
  }

  subscribe<T>(event: string, callback: (data: T) => void) {
    this.eventSource.addEventListener(event, ((e: MessageEvent) => {
      callback(JSON.parse(e.data));
    }) as EventListener);
  }

  close() {
    this.eventSource.close();
  }
}
```

### Использование SSE
```typescript
// src/hooks/usePortfolioStream.ts
import { useEffect } from 'react';
import { usePortfolioStore } from '../store/usePortfolioStore';
import { SSEClient } from '../services/sse';

export const usePortfolioStream = () => {
  const updatePortfolio = usePortfolioStore((state) => state.updatePortfolio);

  useEffect(() => {
    const sse = new SSEClient('/api/portfolio/stream');

    sse.subscribe('portfolio-update', (data) => {
      updatePortfolio(data);
    });

    return () => sse.close();
  }, []);
};
```

## API Интеграция

### Streaming API
```typescript
// src/services/api.ts
export const streamAnalysis = async (ticker: string) => {
  const response = await fetch(`/api/analyze/${ticker}/stream`, {
    headers: {
      'Accept': 'text/event-stream',
    },
  });

  if (!response.body) throw new Error('No response body');

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    
    const chunk = decoder.decode(value);
    // Обработка частичных данных
    console.log('Received chunk:', chunk);
  }
};
```

## Стилизация с Tailwind

### Конфигурация
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ...остальные оттенки
        },
      },
      animation: {
        'typewriter': 'typewriter 2s steps(40) forwards',
      },
    },
  },
  plugins: [],
};
```

### Пример компонента с Tailwind
```typescript
// src/components/Analysis/AnalysisResult.tsx
export const AnalysisResult = ({ result }: AnalysisResultProps) => (
  <div className="space-y-4 p-6 bg-white rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold text-gray-900">
      Analysis Results
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 bg-gray-50 rounded-md">
        <span className="text-sm text-gray-500">Score</span>
        <p className="text-2xl font-bold text-gray-900">
          {result.score}
        </p>
      </div>
      <div className="p-4 bg-gray-50 rounded-md">
        <span className="text-sm text-gray-500">Confidence</span>
        <p className="text-2xl font-bold text-gray-900">
          {result.confidence}%
        </p>
      </div>
    </div>
    <div className="animate-typewriter">
      {result.analysis}
    </div>
  </div>
);
```

## Рекомендации по разработке

### Структура компонентов
```typescript
// Атомарный дизайн
src/components/
  ├── atoms/       # Базовые компоненты
  ├── molecules/   # Составные компоненты
  ├── organisms/   # Сложные компоненты
  ├── templates/   # Шаблоны страниц
  └── pages/       # Страницы
```

### Производительность
- Используйте `React.memo` для оптимизации ререндеров
- Применяйте динамический импорт для разделения кода
- Оптимизируйте изображения и ассеты
- Используйте кэширование данных в Zustand

### Доступность
- Следуйте WAI-ARIA рекомендациям
- Используйте семантические HTML элементы
- Обеспечьте поддержку клавиатурной навигации
- Тестируйте с screen readers

## Примеры использования

### Zustand Store
```typescript
// Использование в компоненте
const Portfolio = () => {
  const { cash, positions, fetchPortfolio } = usePortfolioStore();

  useEffect(() => {
    fetchPortfolio();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
      <div className="text-xl">Cash: ${cash}</div>
      {/* Остальной UI */}
    </div>
  );
};
```

### SSE + Анимация
```typescript
// Компонент с анимированным выводом
const LiveAnalysis = () => {
  const [analysis, setAnalysis] = useState('');

  useEffect(() => {
    const sse = new SSEClient('/api/analysis/stream');
    
    sse.subscribe('analysis-chunk', (chunk: string) => {
      setAnalysis(prev => prev + chunk);
    });

    return () => sse.close();
  }, []);

  return (
    <div className="font-mono">
      <p className="animate-typewriter whitespace-pre-wrap">
        {analysis}
      </p>
    </div>
  );
};
```
