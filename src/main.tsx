import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from "./App"
import './index.css';
import { ShoppingCartProvider } from './context/ShoppingCartContext';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ShoppingCartProvider>
    <App />
    </ShoppingCartProvider>

    </BrowserRouter>
  </StrictMode>
)
