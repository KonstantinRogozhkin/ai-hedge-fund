# Fundamentals Agent

## Общее описание
Fundamentals Agent - это специализированный агент, который анализирует фундаментальные показатели компаний для генерации торговых сигналов. Агент использует комплексный подход, оценивая четыре ключевых аспекта: прибыльность, рост, финансовое здоровье и оценочные мультипликаторы.

## Компоненты анализа

### 1. Анализ прибыльности
#### Метрики:
- Return on Equity (ROE)
  - Пороговое значение: >15%
- Чистая маржа
  - Пороговое значение: >20%
- Операционная маржа
  - Пороговое значение: >15%

#### Логика оценки:
```python
thresholds = [
    (return_on_equity, 0.15),  # Сильный ROE выше 15%
    (net_margin, 0.20),        # Здоровая маржа прибыли
    (operating_margin, 0.15),  # Сильная операционная эффективность
]
profitability_score = sum(metric > threshold for metric, threshold in thresholds)
```

### 2. Анализ роста
#### Метрики:
- Рост выручки
  - Пороговое значение: >10%
- Рост прибыли
  - Пороговое значение: >10%
- Рост балансовой стоимости
  - Пороговое значение: >10%

#### Логика оценки:
```python
thresholds = [
    (revenue_growth, 0.10),      # 10% рост выручки
    (earnings_growth, 0.10),     # 10% рост прибыли
    (book_value_growth, 0.10),   # 10% рост балансовой стоимости
]
growth_score = sum(metric > threshold for metric, threshold in thresholds)
```

### 3. Финансовое здоровье
#### Метрики:
- Коэффициент текущей ликвидности
  - Пороговое значение: >1.5
- Соотношение долга к капиталу
  - Пороговое значение: <0.5
- Свободный денежный поток на акцию
  - Сравнение с прибылью на акцию

#### Логика оценки:
```python
health_score = 0
if current_ratio > 1.5:                           # Сильная ликвидность
    health_score += 1
if debt_to_equity < 0.5:                         # Консервативный уровень долга
    health_score += 1
if free_cash_flow_per_share > earnings_per_share * 0.8:  # Сильная конверсия FCF
    health_score += 1
```

### 4. Оценочные мультипликаторы
#### Метрики:
- P/E (Цена/Прибыль)
  - Пороговое значение: <25
- P/B (Цена/Балансовая стоимость)
  - Пороговое значение: <3
- P/S (Цена/Выручка)
  - Пороговое значение: <5

#### Логика оценки:
```python
thresholds = [
    (pe_ratio, 25),    # Разумный P/E
    (pb_ratio, 3),     # Разумный P/B
    (ps_ratio, 5),     # Разумный P/S
]
price_ratio_score = sum(metric < threshold for metric, threshold in thresholds)
```

## Процесс анализа

### 1. Сбор данных
```python
financial_metrics = get_financial_metrics(
    ticker=ticker,
    end_date=end_date,
    period="ttm",
    limit=10
)
```

### 2. Генерация сигналов
Для каждого компонента анализа:
```python
signal = "bullish" if score >= threshold else "bearish" if score == 0 else "neutral"
```

### 3. Формирование итогового сигнала
```python
bullish_signals = signals.count("bullish")
bearish_signals = signals.count("bearish")

if bullish_signals > bearish_signals:
    overall_signal = "bullish"
elif bearish_signals > bullish_signals:
    overall_signal = "bearish"
else:
    overall_signal = "neutral"
```

## Выходные данные

### 1. Структура анализа
```python
fundamental_analysis = {
    "ticker": {
        "signal": str,          # bullish/bearish/neutral
        "confidence": float,    # уровень уверенности (0-100)
        "reasoning": {
            "profitability_signal": {
                "signal": str,
                "details": str
            },
            "growth_signal": {
                "signal": str,
                "details": str
            },
            "financial_health_signal": {
                "signal": str,
                "details": str
            },
            "price_ratios_signal": {
                "signal": str,
                "details": str
            }
        }
    }
}
```

### 2. Пример вывода
```python
{
    "AAPL": {
        "signal": "bullish",
        "confidence": 75.0,
        "reasoning": {
            "profitability_signal": {
                "signal": "bullish",
                "details": "ROE: 150%, Net Margin: 25%, Op Margin: 30%"
            },
            # ... другие сигналы
        }
    }
}
```

## Особенности реализации

### 1. Обработка данных
- Проверка наличия данных
- Обработка отсутствующих значений
- Форматирование вывода

### 2. Мониторинг прогресса
```python
progress.update_status("fundamentals_agent", ticker, "status_message")
```

### 3. Интеграция
```python
state["data"]["analyst_signals"]["fundamentals_agent"] = fundamental_analysis
```

## Ограничения

### 1. Данные
- Зависимость от качества входных данных
- Необходимость исторических данных
- Обработка отсутствующих значений

### 2. Методология
- Фиксированные пороговые значения
- Упрощенная система скоринга
- Ограниченный набор метрик

### 3. Отраслевые особенности
- Единые пороговые значения для всех отраслей
- Отсутствие отраслевых корректировок
- Ограниченный учет специфики бизнеса

## Рекомендации по использованию

### 1. Настройка параметров
- Адаптация пороговых значений
- Настройка весов компонентов
- Учет отраслевой специфики

### 2. Интерпретация результатов
- Комплексный анализ всех компонентов
- Учет уровня уверенности
- Сравнение с отраслевыми показателями

### 3. Комбинирование сигналов
- Использование с техническим анализом
- Учет рыночных условий
- Интеграция с другими агентами

## Планы по улучшению

### 1. Расширение анализа
- Добавление новых метрик
- Учет отраслевой специфики
- Динамические пороговые значения

### 2. Улучшение методологии
- Машинное обучение для скоринга
- Адаптивные пороговые значения
- Улучшенная обработка данных

### 3. Оптимизация
- Кэширование результатов
- Параллельная обработка
- Улучшение производительности
