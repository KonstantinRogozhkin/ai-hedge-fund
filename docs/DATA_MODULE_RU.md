# Модуль данных AI Hedge Fund

## Общее описание
Модуль данных AI Hedge Fund отвечает за работу с финансовыми данными, их структурирование и кэширование. Он состоит из двух основных компонентов: моделей данных (`models.py`) и системы кэширования (`cache.py`).

## Модели данных (models.py)

### 1. Ценовые данные
```python
class Price(BaseModel):
    open: float        # Цена открытия
    close: float      # Цена закрытия
    high: float       # Максимальная цена
    low: float        # Минимальная цена
    volume: int       # Объем торгов
    time: str         # Временная метка
```

### 2. Финансовые метрики
```python
class FinancialMetrics(BaseModel):
    # Основные идентификаторы
    ticker: str               # Тикер компании
    calendar_date: str        # Календарная дата
    report_period: str        # Отчетный период
    currency: str            # Валюта

    # Рыночные показатели
    market_cap: float | None                         # Рыночная капитализация
    enterprise_value: float | None                   # Стоимость предприятия
    
    # Коэффициенты оценки
    price_to_earnings_ratio: float | None            # P/E
    price_to_book_ratio: float | None               # P/B
    price_to_sales_ratio: float | None              # P/S
    enterprise_value_to_ebitda_ratio: float | None   # EV/EBITDA
    
    # Показатели эффективности
    gross_margin: float | None                      # Валовая маржа
    operating_margin: float | None                  # Операционная маржа
    net_margin: float | None                        # Чистая маржа
    
    # Показатели рентабельности
    return_on_equity: float | None                  # ROE
    return_on_assets: float | None                  # ROA
    return_on_invested_capital: float | None        # ROIC
    
    # Показатели оборачиваемости
    asset_turnover: float | None                    # Оборачиваемость активов
    inventory_turnover: float | None                # Оборачиваемость запасов
    receivables_turnover: float | None              # Оборачиваемость дебиторской задолженности
    
    # Показатели ликвидности
    current_ratio: float | None                     # Текущая ликвидность
    quick_ratio: float | None                       # Быстрая ликвидность
    cash_ratio: float | None                        # Денежная ликвидность
    
    # Показатели долговой нагрузки
    debt_to_equity: float | None                    # Долг/Капитал
    debt_to_assets: float | None                    # Долг/Активы
    interest_coverage: float | None                 # Покрытие процентов
    
    # Показатели роста
    revenue_growth: float | None                    # Рост выручки
    earnings_growth: float | None                   # Рост прибыли
    book_value_growth: float | None                 # Рост балансовой стоимости
```

### 3. Инсайдерские сделки
```python
class InsiderTrade(BaseModel):
    ticker: str                               # Тикер компании
    issuer: str | None                        # Эмитент
    name: str | None                          # Имя инсайдера
    title: str | None                         # Должность
    is_board_director: bool | None            # Член совета директоров
    transaction_date: str | None              # Дата сделки
    transaction_shares: float | None          # Количество акций
    transaction_price_per_share: float | None # Цена за акцию
    transaction_value: float | None           # Общая стоимость сделки
```

### 4. Новости компании
```python
class CompanyNews(BaseModel):
    ticker: str                # Тикер компании
    title: str                 # Заголовок новости
    author: str                # Автор
    source: str                # Источник
    date: str                  # Дата публикации
    url: str                   # URL новости
    sentiment: str | None      # Сентимент (если доступен)
```

### 5. Портфель и позиции
```python
class Position(BaseModel):
    cash: float = 0.0         # Денежная позиция
    shares: int = 0           # Количество акций
    ticker: str               # Тикер

class Portfolio(BaseModel):
    positions: dict[str, Position]  # Позиции по тикерам
    total_cash: float = 0.0         # Общая сумма денег
```

## Система кэширования (cache.py)

### 1. Основные возможности
- In-memory кэширование всех типов данных
- Автоматическое объединение новых данных с существующими
- Предотвращение дублирования данных
- Глобальный доступ через синглтон

### 2. Типы кэшируемых данных
- Ценовые данные (`_prices_cache`)
- Финансовые метрики (`_financial_metrics_cache`)
- Статьи отчетности (`_line_items_cache`)
- Инсайдерские сделки (`_insider_trades_cache`)
- Новости компаний (`_company_news_cache`)

### 3. Методы работы с кэшем
```python
# Получение данных
get_prices(ticker: str) -> list[dict]
get_financial_metrics(ticker: str) -> list[dict]
get_line_items(ticker: str) -> list[dict]
get_insider_trades(ticker: str) -> list[dict]
get_company_news(ticker: str) -> list[dict]

# Сохранение данных
set_prices(ticker: str, data: list[dict])
set_financial_metrics(ticker: str, data: list[dict])
set_line_items(ticker: str, data: list[dict])
set_insider_trades(ticker: str, data: list[dict])
set_company_news(ticker: str, data: list[dict])
```

## Особенности реализации

### 1. Валидация данных
- Использование Pydantic для валидации всех входящих данных
- Строгая типизация всех полей
- Поддержка опциональных значений через `| None`

### 2. Оптимизация памяти
- Эффективное хранение данных в словарях
- Предотвращение дублирования через механизм слияния
- Использование ключевых полей для идентификации уникальных записей

### 3. Расширяемость
- Модульная структура кода
- Легкое добавление новых типов данных
- Поддержка дополнительных полей через `model_config = {"extra": "allow"}`

## Рекомендации по использованию

### 1. Работа с данными
```python
from data.models import Price, FinancialMetrics
from data.cache import get_cache

# Получение кэша
cache = get_cache()

# Работа с ценами
prices = cache.get_prices("AAPL")
if prices:
    for price in prices:
        print(f"Цена закрытия: {price['close']}")

# Работа с метриками
metrics = cache.get_financial_metrics("AAPL")
if metrics:
    for metric in metrics:
        print(f"P/E: {metric['price_to_earnings_ratio']}")
```

### 2. Обновление данных
```python
# Добавление новых данных
new_prices = [{"time": "2025-02-14", "close": 150.0, ...}]
cache.set_prices("AAPL", new_prices)
```

### 3. Валидация данных
```python
from data.models import Price

# Создание и валидация объекта
price = Price(
    open=150.0,
    close=151.0,
    high=152.0,
    low=149.0,
    volume=1000000,
    time="2025-02-14"
)
```

## Ограничения

1. **Память**
   - Данные хранятся в оперативной памяти
   - Нет персистентного хранения
   - Данные теряются при перезапуске

2. **Конкурентность**
   - Нет встроенной защиты от race conditions
   - Рекомендуется использовать внешнюю синхронизацию

3. **Валидация**
   - Не все поля имеют бизнес-валидацию
   - Некоторые поля могут принимать None

## Планы по улучшению

1. **Хранение**
   - Добавить персистентное хранение
   - Реализовать систему очистки старых данных
   - Добавить компрессию данных

2. **Валидация**
   - Расширить бизнес-валидацию
   - Добавить проверки на диапазоны значений
   - Улучшить обработку ошибок

3. **Производительность**
   - Оптимизировать алгоритмы слияния данных
   - Добавить индексирование
   - Реализовать частичную загрузку данных
