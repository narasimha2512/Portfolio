import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'; 
import './index.css'

// createRoot(document.getElementById("root")!).render(<App />);

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/Portfolio">    {/* ✅ Add this */}
    <App />
  </BrowserRouter>
);