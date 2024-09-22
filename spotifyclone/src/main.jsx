// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </StrictMode>,
// )

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot directly
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import PlayerContextProvider from './context/PlayerContext.jsx';

// Use createRoot instead of ReactDOM.createRoot
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PlayerContextProvider>
    <App />
    </PlayerContextProvider>
    </BrowserRouter>
  </StrictMode>
);
