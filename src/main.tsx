import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'

import '@/index.css'
import browserRouter from '@lib/router/router'
import { ToastContainer, Zoom } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={browserRouter} />
        <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Zoom}
        />
    </StrictMode>,
)
