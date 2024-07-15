import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ConfigProvider } from 'antd'
import { BrowserRouter, useNavigate } from "react-router-dom"
import { ClerkProvider } from '@clerk/clerk-react'
import { QueryClient, QueryClientProvider } from 'react-query'

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

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <ConfigProvider
          theme={{
            token: {
              // Seed Token
              // colorPrimary: '#17BEBB',
              // colorPrimary: '#F93943', //primary
              colorPrimary: '#764abc', //primary
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
    </QueryClientProvider>
  </React.StrictMode>,
)
