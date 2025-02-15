# Technical Agent

## Общее описание
Technical Agent - это сложная система технического анализа, которая комбинирует пять основных торговых стратегий: следование тренду, возврат к среднему, моментум, анализ волатильности и статистический арбитраж. Агент использует взвешенный подход для объединения сигналов от каждой стратегии.

## Торговые стратегии

### 1. Следование тренду (`calculate_trend_signals`)
#### Индикаторы:
- EMA (Экспоненциальная скользящая средняя)
- ADX (Индекс среднего направленного движения)
- Трендовые линии

#### Временные рамки:
- Краткосрочный тренд
- Среднесрочный тренд
- Долгосрочный тренд

### 2. Возврат к среднему (`calculate_mean_reversion_signals`)
#### Индикаторы:
- Bollinger Bands (Полосы Боллинджера)
- RSI (Индекс относительной силы)
- Показатель Хёрста
- Статистические отклонения

### 3. Моментум (`calculate_momentum_signals`)
#### Индикаторы:
- Ценовой моментум
- Объемный моментум
- Относительная сила
- Скорость изменения цены

### 4. Анализ волатильности (`calculate_volatility_signals`)
#### Индикаторы:
- ATR (Средний истинный диапазон)
- Исторический диапазон волатильности
- Сжатие волатильности
- Взрывы волатильности

### 5. Статистический арбитраж (`calculate_stat_arb_signals`)
#### Индикаторы:
- Z-score анализ
- Корреляционный анализ
- Статистические паттерны
- Аномалии цен

## Технические индикаторы

### 1. RSI (Relative Strength Index)
```python
def calculate_rsi(prices_df: pd.DataFrame, period: int = 14):
    """
    Расчет индекса относительной силы
    period: период для расчета (по умолчанию 14)
    """
```

### 2. Bollinger Bands
```python
def calculate_bollinger_bands(prices_df: pd.DataFrame, window: int = 20):
    """
    Расчет полос Боллинджера
    window: период для расчета (по умолчанию 20)
    """
```

### 3. EMA (Exponential Moving Average)
```python
def calculate_ema(df: pd.DataFrame, window: int):
    """
    Расчет экспоненциальной скользящей средней
    window: период для EMA
    """
```

### 4. ADX (Average Directional Index)
```python
def calculate_adx(df: pd.DataFrame, period: int = 14):
    """
    Расчет индекса среднего направленного движения
    period: период для расчета (по умолчанию 14)
    """
```

### 5. ATR (Average True Range)
```python
def calculate_atr(df: pd.DataFrame, period: int = 14):
    """
    Расчет среднего истинного диапазона
    period: период для расчета ATR
    """
```

### 6. Показатель Хёрста
```python
def calculate_hurst_exponent(price_series: pd.Series, max_lag: int = 20):
    """
    H < 0.5: Возврат к среднему
    H = 0.5: Случайное блуждание
    H > 0.5: Тренд
    """
```

## Процесс анализа

### 1. Получение данных
```python
prices = get_prices(
    ticker=ticker,
    start_date=start_date,
    end_date=end_date
)
prices_df = prices_to_df(prices)
```

### 2. Расчет сигналов
```python
trend_signals = calculate_trend_signals(prices_df)
mean_reversion_signals = calculate_mean_reversion_signals(prices_df)
momentum_signals = calculate_momentum_signals(prices_df)
volatility_signals = calculate_volatility_signals(prices_df)
stat_arb_signals = calculate_stat_arb_signals(prices_df)
```

### 3. Комбинирование сигналов
```python
strategy_weights = {
    "trend": 0.25,
    "mean_reversion": 0.20,
    "momentum": 0.25,
    "volatility": 0.15,
    "stat_arb": 0.15
}

combined_signal = weighted_signal_combination(signals, strategy_weights)
```

## Выходные данные

### 1. Структура анализа
```python
technical_analysis = {
    "ticker": {
        "signal": str,          # bullish/bearish/neutral
        "confidence": float,    # уверенность (0-100)
        "strategy_signals": {
            "trend_following": {
                "signal": str,
                "confidence": float,
                "metrics": dict
            },
            "mean_reversion": {
                "signal": str,
                "confidence": float,
                "metrics": dict
            },
            # ... другие стратегии
        }
    }
}
```

### 2. Пример вывода
```python
{
    "AAPL": {
        "signal": "bullish",
        "confidence": 85,
        "strategy_signals": {
            "trend_following": {
                "signal": "bullish",
                "confidence": 90,
                "metrics": {
                    "adx": 28.5,
                    "trend_strength": "strong"
                }
            }
        }
    }
}
```

## Особенности реализации

### 1. Обработка данных
- Нормализация данных
- Обработка пропущенных значений
- Валидация входных данных

### 2. Оптимизация
- Кэширование результатов
- Эффективные алгоритмы
- Векторизованные операции

### 3. Мониторинг
```python
progress.update_status("technical_analyst_agent", ticker, "status_message")
```

## Ограничения

### 1. Данные
- Необходимость исторических данных
- Чувствительность к качеству данных
- Задержки в получении данных

### 2. Методология
- Фиксированные веса стратегий
- Ограниченный набор индикаторов
- Упрощенные модели

### 3. Технические
- Вычислительная сложность
- Задержки в расчетах
- Ограничения памяти

## Рекомендации по использованию

### 1. Настройка параметров
- Адаптация весов стратегий
- Настройка периодов индикаторов
- Калибровка порогов

### 2. Интерпретация результатов
- Учет рыночного контекста
- Комбинирование с фундаментальным анализом
- Мониторинг уверенности сигналов

### 3. Оптимизация
- Периодическая калибровка
- Бэктестинг стратегий
- Мониторинг производительности

## Планы по улучшению

### 1. Расширение функциональности
- Добавление новых индикаторов
- Машинное обучение для оптимизации весов
- Адаптивные стратегии

### 2. Оптимизация производительности
- Параллельные вычисления
- Улучшенное кэширование
- Оптимизация алгоритмов

### 3. Улучшение анализа
- Расширенный анализ паттернов
- Улучшенные статистические модели
- Интеграция с внешними данными
