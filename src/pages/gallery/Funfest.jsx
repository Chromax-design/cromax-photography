import React from 'react'
import ImageGallery from '../../components/ImageGallery';
import TitleComponent from '../../components/TitleComponent';

const funfestImages = import.meta.glob('/src/assets/funfest/*', { eager: true })
const funfestEntries = Object.entries(funfestImages);

const Funfest = () => {
    return (
        <main className=' my-14 space-y-5 p-3'>
            <TitleComponent title={'Esther\'s funfest gallery'} />
            <ImageGallery imageEntries={funfestEntries} />
        </main>
    )
}

export default Funfest