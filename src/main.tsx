import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ConfigProvider } from 'antd'
import { BrowserRouter, useNavigate } from "react-router-dom"
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const ClerkWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider 
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <App />
    </ClerkProvider>
  )
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ConfigProvider
        theme={{
          token: {
            // Seed Token
            // colorPrimary: '#17BEBB',
            colorPrimary: '#F93943', //primary
            // colorPrimary: '#0499b0',
            // colorPrimary: '#A40E4C',
            // colorPrimary: '#0D3B66',
            borderRadius: 2,

            // Alias Token
            // colorBgContainer: '#f6ffed',
          },
          components: {
            Menu: {
              itemBg: '#fafafa',
            },
          },
        }}
      >
        <ClerkWithRoutes />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
