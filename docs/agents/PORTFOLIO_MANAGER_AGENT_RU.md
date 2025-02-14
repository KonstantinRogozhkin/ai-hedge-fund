# Portfolio Manager Agent

## Общее описание
Portfolio Manager Agent - это агент, отвечающий за принятие окончательных торговых решений на основе сигналов от других агентов-аналитиков. Он учитывает текущее состояние портфеля, ограничения по позициям, доступные средства и требования по марже для формирования торговых приказов.

## Основные компоненты

### 1. Модели данных

#### PortfolioDecision
```python
class PortfolioDecision:
    action: Literal["buy", "sell", "short", "cover", "hold"]
    quantity: int           # Количество акций для торговли
    confidence: float       # Уверенность в решении (0-100)
    reasoning: str         # Обоснование решения
```

#### PortfolioManagerOutput
```python
class PortfolioManagerOutput:
    decisions: dict[str, PortfolioDecision]  # Словарь решений по тикерам
```

## Торговые правила

### 1. Длинные позиции
- Покупка (buy):
  - Только при наличии доступных средств
  - Количество ≤ max_shares для тикера
- Продажа (sell):
  - Только при наличии длинной позиции
  - Количество ≤ текущего количества акций в позиции

### 2. Короткие позиции
- Короткая продажа (short):
  - Только при наличии доступной маржи
  - Требуется 50% маржи от стоимости позиции
  - Должна соответствовать требованиям по марже
- Закрытие короткой позиции (cover):
  - Только при наличии короткой позиции
  - Количество ≤ текущего количества акций в короткой позиции

### 3. Удержание позиции (hold)
- Нет изменений в текущей позиции
- Используется по умолчанию при недостаточной уверенности

## Процесс принятия решений

### 1. Сбор данных
```python
# Получение данных о портфеле и сигналах
portfolio = state["data"]["portfolio"]
analyst_signals = state["data"]["analyst_signals"]
```

### 2. Анализ ограничений
```python
# Для каждого тикера:
position_limits = risk_data.get("remaining_position_limit", 0)
current_prices = risk_data.get("current_price", 0)
max_shares = position_limits / current_prices
```

### 3. Обработка сигналов
```python
# Сбор сигналов от всех агентов-аналитиков
ticker_signals = {}
for agent, signals in analyst_signals.items():
    if agent != "risk_management_agent":
        ticker_signals[agent] = {
            "signal": signals[ticker]["signal"],
            "confidence": signals[ticker]["confidence"]
        }
```

### 4. Генерация решений
```python
result = generate_trading_decision(
    tickers=tickers,
    signals_by_ticker=signals_by_ticker,
    current_prices=current_prices,
    max_shares=max_shares,
    portfolio=portfolio,
    model_name=state["metadata"]["model_name"],
    model_provider=state["metadata"]["model_provider"]
)
```

## Интеграция с LLM

### 1. Системный промпт
```text
Trading Rules:
- For long positions:
  * Only buy if you have available cash
  * Only sell if you currently hold long shares
  * Sell quantity must be ≤ current position
  * Buy quantity must be ≤ max_shares

- For short positions:
  * Only short if you have available margin
  * Only cover if you have short shares
  * Cover quantity must be ≤ current short position
  * Short quantity must respect margin requirements
```

### 2. Входные данные для LLM
- Сигналы по каждому тикеру
- Текущие цены
- Максимальное количество акций
- Доступные средства
- Текущие позиции
- Требования по марже

### 3. Выходные данные
```python
{
    "decisions": {
        "TICKER1": {
            "action": "buy",
            "quantity": 100,
            "confidence": 85.5,
            "reasoning": "Strong buy signals from multiple analysts"
        }
    }
}
```

## Особенности реализации

### 1. Обработка ошибок
```python
def create_default_portfolio_output():
    return PortfolioManagerOutput(
        decisions={
            ticker: PortfolioDecision(
                action="hold",
                quantity=0,
                confidence=0.0,
                reasoning="Error in portfolio management"
            )
        }
    )
```

### 2. Мониторинг прогресса
```python
progress.update_status("portfolio_management_agent", ticker, "status_message")
```

### 3. Логирование
```python
if state["metadata"]["show_reasoning"]:
    show_agent_reasoning(decisions, "Portfolio Management Agent")
```

## Ограничения

### 1. Торговые ограничения
- Фиксированные требования по марже
- Предварительно рассчитанные лимиты позиций
- Ограничения по доступным средствам

### 2. Технические ограничения
- Зависимость от качества LLM
- Задержки в обработке данных
- Ограничения по памяти

### 3. Методологические ограничения
- Фиксированный набор действий
- Упрощенная модель принятия решений
- Ограниченный учет рыночных условий

## Рекомендации по использованию

### 1. Настройка параметров
- Адаптация требований по марже
- Настройка лимитов позиций
- Калибровка уровней уверенности

### 2. Мониторинг
- Отслеживание исполнения решений
- Анализ эффективности решений
- Контроль рисков

### 3. Оптимизация
- Регулярная калибровка параметров
- Анализ исторической эффективности
- Улучшение процесса принятия решений

## Планы по улучшению

### 1. Расширение функциональности
- Добавление новых типов ордеров
- Улучшенное управление маржой
- Динамические лимиты позиций

### 2. Улучшение анализа
- Машинное обучение для оптимизации
- Улучшенный анализ рисков
- Интеграция с рыночными данными

### 3. Оптимизация производительности
- Параллельная обработка решений
- Улучшенное кэширование
- Оптимизация взаимодействия с LLM
