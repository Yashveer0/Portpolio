import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './compoments/Header/Header'
import { Footer } from './compoments/Footer/Footer'

export function Layout(props) {
    

    return (
        <>
        < Header />
        <Outlet />
        < Footer />
        </>
    )
}
