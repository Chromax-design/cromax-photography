import React from 'react'
import picnicCover from '../assets/picnic/picnic 35.jpg'
import funfestCover from '../assets/funfest/funfest 25.jpg'
import bfwCover from '../assets/bfw/bfw 15.jpg'
import HomepageCard from '../components/HomepageCard'


const Home = () => {
    return (
        <main className=' grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-7 text-white p-4'>
            <HomepageCard coverImage={picnicCover} title={'picnic'} link={'picnic'} />
            <HomepageCard coverImage={funfestCover} title={'esther\'s fun fest'} link={'funfest'} />
            <HomepageCard coverImage={bfwCover} title={'benin fashion week'} link={'bfw'} />
        </main>
    )
}

export default Home