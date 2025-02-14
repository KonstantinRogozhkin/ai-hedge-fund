from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from sse_starlette.sse import EventSourceResponse
from datetime import datetime
import asyncio
import json

app = FastAPI()

# Включаем CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Тестовые данные
PORTFOLIO = {
    "cash": 1000000,
    "positions": {
        "AAPL": {
            "quantity": 100,
            "averagePrice": 150.0,
            "currentPrice": 155.0,
            "value": 15500.0
        },
        "GOOGL": {
            "quantity": 50,
            "averagePrice": 2800.0,
            "currentPrice": 2850.0,
            "value": 142500.0
        }
    }
}

@app.get("/api/portfolio")
async def get_portfolio():
    return PORTFOLIO

@app.get("/api/portfolio/stream")
async def stream_portfolio(request: Request):
    async def event_generator():
        while True:
            if await request.is_disconnected():
                break

            # Имитация обновления данных
            PORTFOLIO["cash"] += 100
            for ticker in PORTFOLIO["positions"]:
                PORTFOLIO["positions"][ticker]["currentPrice"] += 0.1
                PORTFOLIO["positions"][ticker]["value"] = (
                    PORTFOLIO["positions"][ticker]["currentPrice"] * 
                    PORTFOLIO["positions"][ticker]["quantity"]
                )

            yield {
                "event": "portfolio-update",
                "data": json.dumps(PORTFOLIO)
            }
            
            await asyncio.sleep(1)

    return EventSourceResponse(event_generator())

@app.get("/api/signals/{ticker}")
async def get_signals(ticker: str):
    return {
        "fundamental": {
            "recommendation": "buy",
            "metrics": {
                "pe": 15.5,
                "pb": 2.3,
                "roe": 0.25
            },
            "score": 0.85
        },
        "technical": {
            "trend": "bullish",
            "indicators": {
                "rsi": 65,
                "macd": {
                    "value": 2.5,
                    "signal": 1.8
                }
            },
            "score": 0.75
        }
    }

@app.get("/api/analyze/{ticker}/stream")
async def stream_analysis(ticker: str, request: Request):
    analysis_text = [
        "Начинаем анализ тикера...",
        f"Загрузка данных для {ticker}...",
        "Анализ фундаментальных показателей...",
        "Проверка технических индикаторов...",
        "Анализ рыночных настроений...",
        "Формирование итоговой рекомендации...",
        "Анализ завершен!"
    ]

    async def event_generator():
        for text in analysis_text:
            if await request.is_disconnected():
                break

            yield {
                "event": "analysis-chunk",
                "data": text + "\n"
            }
            
            await asyncio.sleep(1)

    return EventSourceResponse(event_generator())
