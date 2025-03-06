import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './Components/DataProvider/DataProvider.jsx'
import { initialState,reducer } from "./utility/reducer.js"
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter basename="/Amazon-E-Commerce-Website-clone-2025">     
    
    <DataProvider initialState={initialState} reducer={reducer}>
      <App />
      </DataProvider>
      </BrowserRouter>
  </StrictMode>,
)
