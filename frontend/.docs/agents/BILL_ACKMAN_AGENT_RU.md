# Bill Ackman Agent

## Общее описание
Bill Ackman Agent - это специализированный агент, который анализирует акции, используя инвестиционные принципы Билла Экмана. Агент реализует стратегию активного инвестирования, фокусируясь на поиске высококачественных компаний с устойчивым конкурентным преимуществом, торгующихся со значительным дисконтом к их внутренней стоимости.

I added a new agent to the AI hedge fund.

The Bill Ackman analyst.

Designed using Mr. Ackman's philosophy:
1 • are cash flows stable?
2 • does the company have a moat?
3 • is there long-term growth?
4 • how strong is the balance sheet?
5 • is management quality high?
6 • is the valuation reasonable?

This is our second investor agent.

You can pair it with the Warren Buffett agent.

The vision is to keep adding more agents that mimic great investors.

Here is a breakdown of the Bill Ackman agent:

1. Free cash flows: Analyzes 5 years of cash flow data, checking for positive and growing free cash flow generation. A positive FCF earns points in the scoring system.

2. Moat: Evaluates competitive advantage through operating margins (>15% indicates strong moat) and return on equity (>15% suggests brand/moat advantage).

3. Long-term growth: Examines revenue consistency, operating margins, and ROE trends over time. Awards points for consistent revenue growth patterns.

4. Balance sheet: Checks debt-to-equity ratios (<1.0 is preferred) and liabilities-to-assets ratio (<0.5 indicates strength). Also evaluates capital allocation via dividends and buybacks.

5. Management quality: Assesses through capital allocation decisions and operational efficiency metrics like margins and returns.

6. Valuation: Performs DCF analysis using 6% growth rate, 10% discount rate, and 15x terminal multiple. Seeks 30%+ margin of safety for highest conviction.

I will keep adding more investor agents. 

Let me know what else to add.

## Архитектура
Агент реализован как функция `bill_ackman_agent(state: AgentState)`, которая принимает состояние системы и возвращает инвестиционные решения. Основные компоненты:

1. Сбор данных:
   - Финансовые метрики (annual/ttm)
   - Финансовые показатели
   - Рыночные данные

2. Анализ:
   - Качество бизнеса
   - Финансовая дисциплина
   - Оценка стоимости
   
3. Принятие решений:
   - LLM-based reasoning
   - Генерация сигналов (bullish/bearish/neutral)
   - Расчет уверенности в решении

## Основные компоненты анализа

### 1. Качество бизнеса (`analyze_business_quality`)
#### Анализируемые факторы:
- Стабильность и рост денежных потоков
- Устойчивость конкурентных преимуществ
- Потенциал долгосрочного роста
- Операционная маржинальность
- Рентабельность активов и капитала

#### Метрики и пороговые значения:
- Динамика выручки (>10% годовой рост)
- Операционная маржа (>15%)
- Рентабельность капитала (ROE >15%)
- Рентабельность активов (ROA >10%)
- Стабильность маржинальности (отклонение <5%)

#### Реализация:
```python
def analyze_business_quality(metrics: list, financial_line_items: list):
    """
    Анализ качества бизнеса на основе метрик и финансовых показателей
    """
    return {
        'revenue_growth': float,
        'margin_stability': float,
        'profitability': float,
        'overall_score': float
    }
```

### 2. Финансовая дисциплина (`analyze_financial_discipline`)
#### Анализируемые факторы:
- Структура и динамика долга
- Политика возврата капитала акционерам
- Эффективность управления капиталом

#### Метрики и пороговые значения:
- Коэффициент долга (Долг/EBITDA <3)
- Коэффициент покрытия процентов (>3)
- Доходность на инвестированный капитал (ROIC >10%)
- Коэффициент выплаты дивидендов (<75%)

#### Реализация:
```python
def analyze_financial_discipline(metrics: list, financial_line_items: list):
    """
    Оценка финансовой дисциплины компании
    """
    return {
        'debt_management': float,
        'capital_returns': float,
        'capital_efficiency': float,
        'overall_score': float
    }
```

### 3. Оценка стоимости (`analyze_valuation`)
#### Методология:
- DCF (Дисконтирование денежных потоков)
- Мультипликаторы (P/E, EV/EBITDA)
- Сравнительный анализ

#### Ключевые параметры:
- Темп роста FCF
- Стоимость капитала (WACC)
- Терминальный рост

#### Реализация:
```python
def analyze_valuation(financial_line_items: list, market_cap: float):
    """
    Оценка стоимости компании с использованием методов DCF и мультипликаторов
    """
    return {
        'intrinsic_value': float,
        'margin_of_safety': float,
        'relative_valuation': dict,
        'overall_score': float
    }
```## Процесс принятия решений

### 1. Сбор и агрегация данных
```python
analysis_data = {
    'business_quality': analyze_business_quality(metrics, financial_line_items),
    'financial_discipline': analyze_financial_discipline(metrics, financial_line_items),
    'valuation': analyze_valuation(financial_line_items, market_cap)
}
```

### 2. LLM-based анализ
```python
def generate_ackman_output(ticker: str, analysis_data: dict, model_name: str, model_provider: str):
    """
    Генерация инвестиционных решений в стиле Билла Экмана
    """
    return BillAckmanSignal
```

### 3. Формат выходных данных
```python
class BillAckmanSignal(BaseModel):
    signal: Literal["bullish", "bearish", "neutral"]
    confidence: float        # 0.0 - 100.0
    reasoning: str          # Обоснование решения
```

## Пример использования

```python
# Инициализация агента
state = AgentState({
    "data": {
        "end_date": "2024-02-14",
        "tickers": ["AAPL", "MSFT", "GOOGL"]
    }
})

# Запуск анализа
results = bill_ackman_agent(state)

# Пример выходных данных
{
    "AAPL": {
        "signal": "bullish",
        "confidence": 85.5,
        "reasoning": "Сильный бренд, высокая маржинальность, значительный потенциал роста"
    }
}
```
- Соотношение долга к собственному капиталу
- Дивидендные выплаты
- Обратный выкуп акций
- Структура активов и обязательств

### 3. Оценка стоимости (`analyze_valuation`)
#### Методология:
- Расчет внутренней стоимости компании
- Анализ свободного денежного потока
- Оценка маржи безопасности

#### Метрики:
- Текущая рыночная капитализация
- Свободный денежный поток
- Мультипликаторы оценки
- Дисконт к внутренней стоимости

## Процесс принятия решений

### 1. Сбор данных
```python
metrics = get_financial_metrics(ticker, end_date, period="annual", limit=5)
financial_line_items = search_line_items(
    ticker,
    [
        "revenue",
        "operating_margin",
        "debt_to_equity",
        "free_cash_flow",
        # ...
    ],
    end_date,
    period="annual",
    limit=5
)
```

### 2. Анализ данных
1. **Качественный анализ**:
   - Оценка бизнес-модели
   - Анализ конкурентных преимуществ
   - Исследование рыночной позиции

2. **Количественный анализ**:
   - Финансовые показатели
   - Оценка стоимости
   - Анализ рисков

### 3. Формирование сигнала
```python
if total_score >= 0.7 * max_possible_score:
    signal = "bullish"
elif total_score <= 0.3 * max_possible_score:
    signal = "bearish"
else:
    signal = "neutral"
```

## Особенности реализации

### 1. Система скоринга
- Каждый аспект анализа оценивается по шкале
- Веса распределяются между различными факторами
- Итоговый скор определяет инвестиционный сигнал

### 2. Использование LLM
- Генерация детального анализа в стиле Билла Экмана
- Учет качественных факторов
- Формирование обоснованных рекомендаций

### 3. Кэширование и оптимизация
- Эффективное использование API
- Сохранение промежуточных результатов
- Оптимизация запросов к данным

## Выходные данные

### 1. Структура анализа
```python
analysis_data = {
    "signal": str,          # bullish/bearish/neutral
    "score": float,         # общий скор
    "max_score": float,     # максимально возможный скор
    "quality_analysis": {    # анализ качества бизнеса
        "score": float,
        "details": dict
    },
    "balance_sheet_analysis": {  # анализ баланса
        "score": float,
        "details": dict
    },
    "valuation_analysis": {      # анализ оценки
        "score": float,
        "details": dict
    }
}
```

### 2. Инвестиционный сигнал
```python
ackman_analysis = {
    "signal": str,          # инвестиционный сигнал
    "confidence": float,    # уверенность в решении
    "reasoning": str        # подробное обоснование
}
```

## Принципы инвестирования Билла Экмана

### 1. Качество бизнеса
- Простой и понятный бизнес
- Предсказуемые денежные потоки
- Высокие барьеры для входа
- Сильные конкурентные преимущества

### 2. Финансовая дисциплина
- Разумное использование долга
- Эффективное распределение капитала
- Прозрачная финансовая отчетность
- Ориентация на долгосрочный рост

### 3. Оценка и маржа безопасности
- Значительный дисконт к внутренней стоимости
- Консервативный подход к оценке
- Учет рыночных рисков
- Долгосрочный инвестиционный горизонт

## Ограничения и особенности

### 1. Ограничения модели
- Фокус на публичных компаниях
- Зависимость от качества данных
- Упрощенный подход к оценке

### 2. Риски
- Рыночные риски
- Риски модели
- Риски данных

### 3. Рекомендации по использованию
- Использование в составе комплексного анализа
- Регулярная валидация результатов
- Учет рыночного контекста

## Планы по улучшению

### 1. Расширение анализа
- Добавление новых метрик
- Улучшение оценки качественных факторов
- Расширение источников данных

### 2. Оптимизация
- Улучшение производительности
- Оптимизация использования API
- Расширение кэширования

### 3. Интеграция
- Улучшение взаимодействия с другими агентами
- Расширение системы скоринга
- Добавление новых источников данных
