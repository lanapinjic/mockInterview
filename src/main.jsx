import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='509972603218-kv27ca0up2vso4p185oqrbn66hq56apj.apps.googleusercontent.com'>
    
        <App />
    
    </GoogleOAuthProvider>
  </React.StrictMode>
)
