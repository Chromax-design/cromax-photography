import React from 'react'
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import TitleComponent from '../../components/TitleComponent'

const images = import.meta.glob('/src/assets/picnic/*', { eager: true })
const imageEntries = Object.entries(images);

const Picnic = () => {
  return (
    <main className=' my-14 space-y-5 p-3'>
      <TitleComponent title={'picnic gallery'} />
      <section className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5'>
        {imageEntries.map(([path, module], index) => (
          <div className='h-80 overflow-hidden group hover:scale-105 duration-300 ease-in-out' key={index}>
            <LightGallery
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
            >
              <a href={module.default}>
                <img
                  key={index}
                  src={module.default}
                  alt={`gallery-${index}`}
                  className="w-full h-full min-h-80 rounded object-cover object-top saturate-0 group-hover:scale-105 duration-300 ease-in-out group-hover:cursor-pointer group-hover:saturate-100 brightness-90"
                />
              </a>
            </LightGallery>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Picnic