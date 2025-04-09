import React from 'react'
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const ImageGallery = ({imageEntries}) => {
  return (
    <section className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5'>
        {imageEntries.map(([path, module], index) => (
          <div className='h-80 overflow-hidden group hover:scale-105 duration-300 ease-in-out' key={index}>
            <LightGallery
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
              download={true}
              closable={true}
              mobileSettings={{
                controls: true, // Enables controls on mobile
                showCloseIcon: true,
                download: true,
              }}
              preload={2}
            >
              <a href={module.default}>
                <img
                  key={index}
                  src={module.default}
                  alt={`gallery-${index}`}
                  className="w-full h-full min-h-80 rounded object-cover object-top saturate-0 group-hover:scale-105 duration-300 ease-in-out group-hover:cursor-pointer group-hover:saturate-100 brightness-80 group-active:saturate-100 group-active:scale-105"
                  loading='lazy'
                />
              </a>
            </LightGallery>
          </div>
        ))}
      </section>
  )
}

export default ImageGallery