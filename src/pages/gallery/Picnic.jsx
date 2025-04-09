import React from 'react'
import TitleComponent from '../../components/TitleComponent'
import ImageGallery from '../../components/ImageGallery';
import Seo from '../../components/Seo';

const picnicImages = import.meta.glob('/src/assets/picnic/*', { eager: true })
const picnicEntries = Object.entries(picnicImages);

const Picnic = () => {
  return (
    <>
    <Seo title="Picnic" description="Picnic page" url="https://cromax-photography-site.vercel.app/picnic" image="https://cromax-photography-site.vercel.app/banners/picnic-banner.jpg" />
    <main className=' my-14 space-y-5 p-3'>
      <TitleComponent title={'picnic gallery'} />
      <ImageGallery imageEntries={picnicEntries} />
    </main>
    </>
  )
}

export default Picnic