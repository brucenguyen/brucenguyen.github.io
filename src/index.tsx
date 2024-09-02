import './index.scss'
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/resume" index element={<NotFoundPage />} />
        <Route path="/work" element={<NotFoundPage />} />
        <Route path="/contact" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  )
}

const root = document.getElementById('root')

if (root) {
  ReactDOMClient.createRoot(root).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  )
}
