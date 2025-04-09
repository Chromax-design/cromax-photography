import React from 'react'
import { Outlet } from 'react-router'
import NavComponent from '../components/NavComponent'
import ScrollToTop from '../components/ScrollToTop'

const RootLayout = () => {
    return (
        <div className='bg-black min-h-[100vh]'>
            <div className='max-w-7xl mx-auto'>
                <header className='py-4'>
                    <NavComponent />
                </header>
                <Outlet />
                <footer className='text-xs lg:text-sm text-center text-white/45 py-10'>
                    <p>Copyright &copy; {new Date().getFullYear()} All rights reserved | This website was made by Cromax</p>
                </footer>
            </div>
            <ScrollToTop />
        </div>)
}

export default RootLayout