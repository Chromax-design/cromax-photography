import React from 'react'
import { Link, NavLink } from 'react-router'
import MobileNav from './MobileNav';
import SocialMedia from './SocialMedia';

const NavComponent = () => {
    const pages = [{ title: 'home', link: '/' }, { title: 'about', link: '/about' }, { title: 'services', link: '/services', }, { title: 'contact', link: '/contact' }];
    return (
        <nav className=' flex justify-between items-center text-white px-4 lg:px-2'>
            <Link className='font-semibold text-4xl capitalize'>cromax</Link>
            <ul className=' uppercase max-lg:hidden flex gap-7'>
                {
                    pages.map((page, i) => <li key={i} className='text-xs tracking-widest '>
                        <NavLink to={page.link} className={({ isActive }) => `${isActive ? 'text-red-400' : 'text-white/45'}`}>
                            {page.title}
                        </NavLink>
                    </li>)
                }
            </ul>
            <SocialMedia uniqueClass={'max-lg:hidden'} />
            <MobileNav />
        </nav>
    )
}

export default NavComponent