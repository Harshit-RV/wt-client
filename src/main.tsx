import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            // colorPrimary: '#17BEBB',
            // colorPrimary: '#CD5334',
            colorPrimary: '#F93943',
            borderRadius: 2,

            // Alias Token
            // colorBgContainer: '#f6ffed',
          },
          components: {
            Menu: {
              itemBg: '#fafafa',
              // darkItemHoverColor: '#000',
              // darkItemSelectedBg: '#fa8c91',
              // darkItemSelectedColor: '#fff',
            },
          },
        }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
)
