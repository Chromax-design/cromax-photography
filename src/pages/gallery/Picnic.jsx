import React from 'react'
import TitleComponent from '../../components/TitleComponent'
import ImageGallery from '../../components/ImageGallery';

const picnicImages = import.meta.glob('/src/assets/picnic/*', { eager: true })
const picnicEntries = Object.entries(picnicImages);

const Picnic = () => {
  return (
    <main className=' my-14 space-y-5 p-3'>
      <TitleComponent title={'picnic gallery'} />
      <ImageGallery imageEntries={picnicEntries} />
    </main>
  )
}

export default Picnic