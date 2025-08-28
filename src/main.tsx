import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ResourcePreloader from './components/performance/ResourcePreloader'

createRoot(document.getElementById("root")!).render(
  <>
    <ResourcePreloader />
    <App />
  </>
);
