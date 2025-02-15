import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Глобальные стили для киберпанк-эффектов
import './styles/cyberpunk.css'

import App from './App.tsx'

// Добавляем эффект глитча при загрузке
document.documentElement.classList.add('cyberpunk-loaded')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
