import React, { useState } from 'react'
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const ImageGallery = ({ imageEntries }) => {
  return (
    <section className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5'>
      {imageEntries.map(([path, module], index) => {
        const [loaded, setLoaded] = useState(false);

        return (
          <div
            className='h-80 overflow-hidden group hover:scale-105 duration-300 ease-in-out relative'
            key={index}
          >
            {!loaded && (
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 z-10" />
            )}

            <LightGallery
              speed={500}
              plugins={[lgThumbnail, lgZoom]}
              download={true}
              closable={true}
              mobileSettings={{
                controls: true,
                showCloseIcon: true,
                download: true,
              }}
              preload={2}
            >
              <a href={module.default}>
                <img
                  src={module.default}
                  alt={`gallery-${index}`}
                  onLoad={() => setLoaded(true)}
                  className={`w-full h-full min-h-80 rounded object-cover object-top transition-all duration-300 ease-in-out
                  saturate-0 brightness-80 
                  ${loaded ? 'group-hover:scale-105 group-hover:cursor-pointer group-hover:saturate-100 group-active:saturate-100 group-active:scale-105' : 'opacity-0'}`}
                  loading='lazy'
                />
              </a>
            </LightGallery>
          </div>
        );
      })}
    </section>
  )
}

export default ImageGallery