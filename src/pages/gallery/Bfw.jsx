import React from 'react'
import TitleComponent from '../../components/TitleComponent'
import ImageGallery from '../../components/ImageGallery';

const bfwImages = import.meta.glob('/src/assets/bfw/*', { eager: true })
const bfwEntries = Object.entries(bfwImages);

const Bfw = () => {
    return (
        <main className=' my-14 space-y-5 p-3'>
            <TitleComponent title={'BFW gallery'} />
            <ImageGallery imageEntries={bfwEntries} />
        </main>
    )
}

export default Bfw