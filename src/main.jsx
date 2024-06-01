import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Account from './pages/Account.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Reset from './pages/Reset.jsx'
import Dashboard from './pages/Dashboard.jsx'

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/signup",
                element: <Signup/>,
            },
            {
                path: "/fg",
                element: <h1>Forget Password Page</h1>,
            },
            {
                path: "/reset",
                element: <Reset/>,
            },
            {
                path: "/account",
                element: <Account />,
            },
            {
                path: "/dashboard",
                element: <Dashboard/>,
            },
        ]

    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={routes} />
    </React.StrictMode>,
)
