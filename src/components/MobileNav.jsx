import React, { useEffect, useRef, useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { NavLink } from 'react-router'
import SocialMedia from './SocialMedia';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openSideBar = () => setIsOpen(true);
    const closeSideBar = () => setIsOpen(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isOpen])

    const pages = [{ title: 'home', link: '/' }, { title: 'about', link: '/about' }, { title: 'services', link: '/services', }, { title: 'contact', link: '/contact' }];
    return (
        <nav className='max-lg:block hidden'>
            <span className=' text-4xl' onClick={openSideBar}><IoIosMenu /></span>
            {
                isOpen && <div className='fixed h-screen inset-0 bg-black/40 z-10 transition-transform' />
            }
            <div className={`fixed right-0 top-0 bg-white min-w-72 h-screen z-20 transition-transform ${isOpen ? 'translate-x-0' : ' translate-x-full'}`} ref={sidebarRef}>
                <div className='relative'>
                    <div className='absolute p-4 bg-white w-full flex justify-end'>
                        <span className='text-black text-4xl' onClick={closeSideBar}><IoClose /></span>
                    </div>
                </div>
                <div className='h-full overflow-y-auto'>
                    <ul className=' capitalize flex flex-col gap-10 pt-20 px-5'>
                        {
                            pages.map((page, i) => <li key={i} className='text-xl'>
                                <NavLink to={page.link} className={({ isActive }) => `${isActive ? 'text-red-400' : 'text-black'}`}>
                                    {page.title}
                                </NavLink>
                            </li>)
                        }
                    </ul>
                    <SocialMedia uniqueClass={'mt-10 py-10 px-5'} color={'text-black '} />
                </div>
            </div>
        </nav>
    )
}

export default MobileNav