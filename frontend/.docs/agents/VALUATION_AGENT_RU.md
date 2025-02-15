# Valuation Agent

## Общее описание
Valuation Agent - это специализированный агент, который выполняет детальный анализ стоимости компаний, используя несколько методологий оценки. Агент сочетает методы DCF (Discounted Cash Flow) и Owner Earnings для получения комплексной оценки внутренней стоимости компании.

## Методологии оценки

### 1. Owner Earnings (Метод Баффета)
#### Формула расчета:
```python
Owner Earnings = Net Income
                + Depreciation/Amortization
                - Capital Expenditures
                - Working Capital Changes
```

#### Параметры:
- `net_income`: Чистая прибыль
- `depreciation`: Амортизация
- `capex`: Капитальные затраты
- `working_capital_change`: Изменение оборотного капитала
- `growth_rate`: Ожидаемый темп роста
- `required_return`: Требуемая доходность (обычно 15%)
- `margin_of_safety`: Маржа безопасности (25%)

### 2. Discounted Cash Flow (DCF)
#### Формула расчета:
```python
Present Value = Σ(FCF * (1 + g)^t) / (1 + r)^t + Terminal Value
```

#### Параметры:
- `free_cash_flow`: Свободный денежный поток
- `growth_rate`: Темп роста
- `discount_rate`: Ставка дисконтирования (10%)
- `terminal_growth_rate`: Терминальный темп роста (3%)
- `num_years`: Период прогнозирования (5 лет)

## Процесс оценки

### 1. Сбор данных
```python
financial_metrics = get_financial_metrics(
    ticker=ticker,
    end_date=end_date,
    period="ttm"
)

financial_line_items = search_line_items(
    ticker=ticker,
    line_items=[
        "free_cash_flow",
        "net_income",
        "depreciation_and_amortization",
        "capital_expenditure",
        "working_capital"
    ],
    end_date=end_date,
    period="ttm",
    limit=2
)
```

### 2. Расчет Owner Earnings
```python
owner_earnings_value = calculate_owner_earnings_value(
    net_income=current_financial_line_item.net_income,
    depreciation=current_financial_line_item.depreciation_and_amortization,
    capex=current_financial_line_item.capital_expenditure,
    working_capital_change=working_capital_change,
    growth_rate=metrics.earnings_growth,
    required_return=0.15,
    margin_of_safety=0.25
)
```

### 3. Расчет DCF
```python
dcf_value = calculate_intrinsic_value(
    free_cash_flow=current_financial_line_item.free_cash_flow,
    growth_rate=metrics.earnings_growth,
    discount_rate=0.10,
    terminal_growth_rate=0.03,
    num_years=5
)
```

### 4. Формирование сигнала
```python
dcf_gap = (dcf_value - market_cap) / market_cap
owner_earnings_gap = (owner_earnings_value - market_cap) / market_cap
valuation_gap = (dcf_gap + owner_earnings_gap) / 2

if valuation_gap > 0.15:       # Недооценка >15%
    signal = "bullish"
elif valuation_gap < -0.15:    # Переоценка >15%
    signal = "bearish"
else:
    signal = "neutral"
```

## Компоненты анализа

### 1. Анализ оборотного капитала
```python
def calculate_working_capital_change(
    current_working_capital: float,
    previous_working_capital: float
) -> float:
    """
    Положительное изменение = больше капитала в обороте (отток денег)
    Отрицательное изменение = меньше капитала в обороте (приток денег)
    """
    return current_working_capital - previous_working_capital
```

### 2. Расчет Owner Earnings Value
```python
def calculate_owner_earnings_value(
    net_income: float,
    depreciation: float,
    capex: float,
    working_capital_change: float,
    growth_rate: float = 0.05,
    required_return: float = 0.15,
    margin_of_safety: float = 0.25,
    num_years: int = 5
) -> float:
    """
    1. Расчет базового Owner Earnings
    2. Прогнозирование на будущие периоды
    3. Дисконтирование
    4. Применение маржи безопасности
    """
```

### 3. Расчет DCF Value
```python
def calculate_intrinsic_value(
    free_cash_flow: float,
    growth_rate: float = 0.05,
    discount_rate: float = 0.10,
    terminal_growth_rate: float = 0.02,
    num_years: int = 5
) -> float:
    """
    1. Прогнозирование денежных потоков
    2. Расчет терминальной стоимости
    3. Дисконтирование
    """
```

## Выходные данные

### 1. Структура анализа
```python
valuation_analysis = {
    "ticker": str,
    "dcf_value": float,
    "owner_earnings_value": float,
    "market_cap": float,
    "valuation_gap": float,
    "signal": str,
    "details": {
        "dcf_gap": float,
        "owner_earnings_gap": float,
        "growth_rate": float,
        "working_capital_change": float
    }
}
```

## Особенности реализации

### 1. Безопасность и валидация
- Проверка наличия данных
- Валидация финансовых метрик
- Обработка отсутствующих значений

### 2. Оптимизация
- Кэширование результатов
- Эффективное использование API
- Минимизация повторных запросов

### 3. Точность
- Использование нескольких методов оценки
- Учет маржи безопасности
- Консервативные предположения

## Ограничения

### 1. Методологические
- Зависимость от качества входных данных
- Упрощенные предположения о росте
- Ограниченный горизонт прогнозирования

### 2. Технические
- Необходимость исторических данных
- Зависимость от внешних API
- Ограничения по точности прогнозов

### 3. Практические
- Не учитывает качественные факторы
- Ограниченный учет рыночных условий
- Фокус на количественных показателях

## Рекомендации по использованию

### 1. Подготовка данных
- Проверка качества входных данных
- Валидация финансовых показателей
- Анализ исторических трендов

### 2. Интерпретация результатов
- Учет рыночного контекста
- Сравнение с отраслевыми показателями
- Комбинирование с другими методами анализа

### 3. Настройка параметров
- Адаптация к рыночным условиям
- Учет отраслевой специфики
- Корректировка маржи безопасности

## Планы по улучшению

### 1. Методология
- Добавление новых методов оценки
- Улучшение прогнозирования роста
- Учет отраслевых особенностей

### 2. Технические улучшения
- Оптимизация производительности
- Улучшение обработки ошибок
- Расширение валидации данных

### 3. Интеграция
- Улучшение взаимодействия с другими агентами
- Расширение источников данных
- Добавление рыночных индикаторов
