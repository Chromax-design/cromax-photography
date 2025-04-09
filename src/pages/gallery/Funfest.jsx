import React from 'react'
import ImageGallery from '../../components/ImageGallery';
import TitleComponent from '../../components/TitleComponent';
import Seo from '../../components/Seo';

const funfestImages = import.meta.glob('/src/assets/funfest/*', { eager: true })
const funfestEntries = Object.entries(funfestImages);

const Funfest = () => {
    return (
        <>
        <Seo title="Esthers fun fest" description="Esthers fun fest page" url="https://cromax-photography-site.vercel.app/funfest" image="https://cromax-photography-site.vercel.app/banners/funfest-banner.jpg" />
            <main className=' my-14 space-y-5 p-3'>
                <TitleComponent title={'Esther\'s funfest gallery'} />
                <ImageGallery imageEntries={funfestEntries} />
            </main>
        </>
    )
}

export default Funfest