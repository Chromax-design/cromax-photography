import React from 'react'
import TitleComponent from '../components/TitleComponent'
import Seo from '../components/Seo'

const serviceList = [
  {
    title: 'Documentary',
    description: 'Capturing real-life moments and telling authentic stories through images. This style focuses on natural, unposed scenes that document life as it happens, whether it\'s an event or a personal moment.'
  },
  {
    title: 'Event',
    description: 'Immortalizing the energy and atmosphere of live events. Whether it\'s fashion shows, outreach programs, or celebrations, I focus on documenting the story of the event from start to finish.'
  },
  {
    title: 'Portraiture',
    description: 'Focusing on people and capturing their individual stories. Through thoughtful compositions, I aim to showcase the personality and emotion of each subject, often in a natural or candid setting.'
  },
  {
    title: 'Fashion',
    description: 'Combining creativity with style, I shoot editorial fashion and runway shows, capturing both the elegance and energy of fashion in motion, while telling a story through clothing and design.'
  },
  {
    title: 'Conceptual/Creative',
    description: 'Bringing ideas to life through creative and thought-provoking imagery. Whether it’s through styled shoots or fashion editorials, I love creating a visual narrative that speaks beyond the image itself.'
  },
  {
    title: 'Community-Focused',
    description: 'Documenting events that bring people together and have a positive impact on communities. From volunteer outreach to public gatherings, my photography seeks to highlight the power of connection and shared experiences.'
  },
]

const Services = () => {
  return (
    <>
      <Seo title="Services" description="Service page" url="https://cromax-photography-site.vercel.app/services" image="https://cromax-photography-site.vercel.app/assets/about.jpg" />
      <main className='my-14 space-y-5 p-4 lg:p-2'>
        <TitleComponent title={'Services'} />
        <section className=' grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10'>
          {
            serviceList.map(({ title, description }, i) => {
              return (
                <div className='text-white bg-neutral-900 p-10 space-y-5 text-center shadow-2xl hover:scale-105 transition-transform' key={i}>
                  <h2 className='text-2xl'>{title}</h2>
                  <p className=' text-white/40'>{description}</p>
                </div>
              )
            })
          }
        </section>
      </main>
    </>
  )
}

export default Services