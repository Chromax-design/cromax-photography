import React from 'react'
import { Link } from 'react-router'

const HomepageCard = ({coverImage, title, link}) => {
    return (
        <div className=' flex justify-center items-center overflow-hidden relative group max-h-96'>
            <img src={coverImage} alt="" className=' object-cover object-top saturate-0 group-hover:saturate-100 group-hover:scale-105 duration-200 ease-in-out brightness-75 group-hover:brightness-75 group-active:saturate-100 group-active:scale-105 transition-all ' />
            <div className=' absolute top-0 left-0 h-full w-full flex justify-center items-center flex-col gap-4'>
                <h2 className='text-4xl capitalize'>{title}</h2>
                <Link to={`/${link}`} className='uppercase px-6 py-2 text-xs tracking-wider text-white border-2 border-white hover:bg-white hover:text-black active:bg-white active:text-black'>more photos</Link>
            </div>
        </div>
    )
}

export default HomepageCard