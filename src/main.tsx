import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


//import { Amplify } from 'aws-amplify';
//import { amplifyconfiguration } from '../src/amplifyconfiguration.ts'; 
//Amplify.configure(amplifyconfiguration);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
