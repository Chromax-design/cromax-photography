import React from 'react'
import cover from '../assets/picnic/picnic 35.jpg'
import { Link } from 'react-router'

const Home = () => {
  return (
    <main className=' grid grid-cols-3 gap-7 text-white py-4'>
        <div className=' flex justify-center items-center overflow-hidden relative group'>
            <img src={cover} alt="" className=' object-cover saturate-0 group-hover:saturate-100 group-hover:scale-105 duration-200 ease-in-outs group-hover:brightness-75'/>
            <div className=' absolute top-0 left-0 h-full w-full flex justify-center items-center flex-col gap-4'>
                <h2 className='text-4xl capitalize'>picnic</h2>
                <Link to={'/picnic'} className='uppercase px-6 py-2 text-xs tracking-wider text-white border-2 border-white hover:bg-white hover:text-black'>more photos</Link>
            </div>
        </div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit facilis, placeat expedita possimus ullam iure, sequi saepe, corrupti perferendis esse repellat ipsam dolorum animi? Autem obcaecati aliquid modi doloremque?
        </div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit facilis, placeat expedita possimus ullam iure, sequi saepe, corrupti perferendis esse repellat ipsam dolorum animi? Autem obcaecati aliquid modi doloremque?
        </div>

    </main>
  )
}

export default Home