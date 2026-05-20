import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppChat } from './AppChat'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster richColors />
    <AppChat />
  </StrictMode>,
)
