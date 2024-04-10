import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('root')

if (import.meta.env.MODE !== 'production') {
  window.dev = true
} else {
  window.dev = false
}

root &&
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  )
