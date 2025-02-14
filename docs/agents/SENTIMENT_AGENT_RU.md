# Sentiment Agent

## Общее описание
Sentiment Agent - это специализированный агент, который анализирует рыночные настроения на основе инсайдерских сделок и новостей компании. Агент использует взвешенный подход для комбинирования различных сигналов и генерации общего настроения рынка.

## Источники данных

### 1. Инсайдерские сделки
#### Анализируемые факторы:
- Объем сделок
- Направление сделок (покупка/продажа)
- Частота сделок
- Размер транзакций

#### Получение данных:
```python
insider_trades = get_insider_trades(
    ticker=ticker,
    end_date=end_date,
    limit=1000
)
```

### 2. Новости компании
#### Анализируемые факторы:
- Тональность новостей
- Количество новостей
- Важность новостей
- Временные тренды

#### Получение данных:
```python
company_news = get_company_news(
    ticker=ticker,
    end_date=end_date,
    limit=100
)
```

## Методология анализа

### 1. Анализ инсайдерских сделок
```python
transaction_shares = pd.Series([t.transaction_shares for t in insider_trades]).dropna()
insider_signals = np.where(transaction_shares < 0, "bearish", "bullish").tolist()
```

#### Интерпретация:
- Отрицательный объем = медвежий сигнал
- Положительный объем = бычий сигнал

### 2. Анализ новостей
```python
sentiment = pd.Series([n.sentiment for n in company_news]).dropna()
news_signals = np.where(
    sentiment == "negative", "bearish",
    np.where(sentiment == "positive", "bullish", "neutral")
).tolist()
```

#### Интерпретация:
- Позитивные новости = бычий сигнал
- Негативные новости = медвежий сигнал
- Нейтральные новости = нейтральный сигнал

### 3. Комбинирование сигналов
```python
# Веса для различных источников
insider_weight = 0.3  # Вес инсайдерских сделок
news_weight = 0.7     # Вес новостей

# Расчет взвешенных сигналов
bullish_signals = (
    insider_signals.count("bullish") * insider_weight +
    news_signals.count("bullish") * news_weight
)
bearish_signals = (
    insider_signals.count("bearish") * insider_weight +
    news_signals.count("bearish") * news_weight
)
```

## Генерация сигналов

### 1. Определение общего сигнала
```python
if bullish_signals > bearish_signals:
    overall_signal = "bullish"
elif bearish_signals > bullish_signals:
    overall_signal = "bearish"
else:
    overall_signal = "neutral"
```

### 2. Расчет уверенности
```python
total_weighted_signals = (
    len(insider_signals) * insider_weight +
    len(news_signals) * news_weight
)

confidence = round(
    max(bullish_signals, bearish_signals) / total_weighted_signals,
    2
) * 100 if total_weighted_signals > 0 else 0
```

## Выходные данные

### 1. Структура анализа
```python
sentiment_analysis = {
    "ticker": {
        "signal": str,          # bullish/bearish/neutral
        "confidence": float,    # уровень уверенности (0-100)
        "reasoning": str        # объяснение решения
    }
}
```

### 2. Пример вывода
```python
{
    "AAPL": {
        "signal": "bullish",
        "confidence": 75.5,
        "reasoning": "Weighted Bullish signals: 8.5, Weighted Bearish signals: 2.8"
    }
}
```

## Особенности реализации

### 1. Взвешивание сигналов
- Новости имеют больший вес (0.7)
- Инсайдерские сделки имеют меньший вес (0.3)
- Возможность настройки весов

### 2. Обработка данных
- Использование pandas для анализа
- Очистка пропущенных значений
- Эффективная обработка массивов

### 3. Мониторинг прогресса
```python
progress.update_status("sentiment_agent", ticker, "status_message")
```

## Интеграция с другими компонентами

### 1. Состояние агента
```python
state["data"]["analyst_signals"]["sentiment_agent"] = sentiment_analysis
```

### 2. Отображение рассуждений
```python
if state["metadata"]["show_reasoning"]:
    show_agent_reasoning(sentiment_analysis, "Sentiment Analysis Agent")
```

## Ограничения

### 1. Данные
- Задержка в получении инсайдерских сделок
- Ограниченность исторических данных
- Качество анализа новостей

### 2. Методология
- Упрощенная интерпретация сделок
- Бинарная классификация новостей
- Фиксированные веса сигналов

### 3. Технические
- Зависимость от внешних API
- Ограничения по количеству запросов
- Задержки в обработке данных

## Рекомендации по использованию

### 1. Настройка параметров
- Корректировка весов сигналов
- Настройка лимитов данных
- Адаптация к рыночным условиям

### 2. Интерпретация результатов
- Учет рыночного контекста
- Комбинирование с другими сигналами
- Мониторинг уровня уверенности

### 3. Оптимизация
- Кэширование данных
- Параллельная обработка
- Предварительная загрузка

## Планы по улучшению

### 1. Расширение источников данных
- Добавление социальных медиа
- Анализ форумов и блогов
- Интеграция с новыми API

### 2. Улучшение анализа
- Машинное обучение для классификации
- Анализ временных рядов
- Улучшенная обработка текста

### 3. Оптимизация производительности
- Асинхронная обработка
- Улучшенное кэширование
- Оптимизация запросов
