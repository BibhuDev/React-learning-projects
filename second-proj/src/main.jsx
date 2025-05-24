import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './head.jsx';
import Body from './body.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Head/>
    <Body/>
  </StrictMode>,
)
