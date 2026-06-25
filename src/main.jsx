import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootEl = document.getElementById('root')

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// In production the HTML is pre-rendered (SSG), so hydrate it instead of
// re-rendering from scratch. In dev the container is empty, so create a root.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app)
} else {
  createRoot(rootEl).render(app)
}
