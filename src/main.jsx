import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { GlobalContext } from './GlobalContext.jsx'
import { CartContext } from './CartContext.jsx'
import CartProvider from './components/CartProvider.jsx'

const user = 'john';
const age = 30;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <GlobalContext.Provider value={ { user, age } }>
          <App />
        </GlobalContext.Provider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)

// Router
// Routes
// Route
// home.jsx 
// /
// /about
// about.jsx