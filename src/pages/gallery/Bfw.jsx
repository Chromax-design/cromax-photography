import React from 'react'
import TitleComponent from '../../components/TitleComponent'
import ImageGallery from '../../components/ImageGallery';
import Seo from '../../components/Seo';

const bfwImages = import.meta.glob('/src/assets/bfw/*', { eager: true })
const bfwEntries = Object.entries(bfwImages);

const Bfw = () => {
    return (
        <>
            <Seo title="Benin Fashion Week" description="Benin fashion week page" url="https://cromax-photography-site.vercel.app/bfw" image="https://cromax-photography-site.vercel.app/assets/bfw/bfw 3.jpg" />
            <main className=' my-14 space-y-5 p-3'>
                <TitleComponent title={'BFW gallery'} />
                <ImageGallery imageEntries={bfwEntries} />
            </main>
        </>
    )
}

export default Bfw