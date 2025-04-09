import React from 'react'
import TitleComponent from '../components/TitleComponent'
import SocialMedia from '../components/SocialMedia'
import InputField from '../components/InputField'
import Seo from '../components/Seo'

const Contact = () => {
  return (
    <>
    <Seo title="contact" description="Contact page" url="https://cromax-photography-site.vercel.app/contact" image="https://cromax-photography-site.vercel.app/assets/about.jpg" />
    <main className='my-14 space-y-5 p-4 lg:p-2 max-w-6xl mx-auto'>
      <TitleComponent title={'Contact'} />
      <section className='max-md:space-y-10 md:grid md:grid-cols-12 gap-10 text-white w-full'>
        <div className=' md:col-span-8 w-full'>
          <form action="" className='space-y-5'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-7'>
              <InputField label={'first name'} id={'firstName'} />
              <InputField label={'last name'} id={'lastName'} />
            </div>
            <InputField type='email' label={'email'} id={'email'} />
            <InputField label={'subject'} id={'subject'} />
            <InputField label={'message'} id={'message'} isTextArea/>
            <button type="submit" className=' capitalize cursor-pointer bg-red-700 hover:bg-red-900 transition-colors hover:text-white/70 px-4 py-2 '>send message</button>
          </form>
        </div>
        <div className=' md:col-span-4 space-y-7'>
          <div>
            <h2>Phone</h2>
            <p className=' text-white/45'><a href="tel:+2349061592634">+234&nbsp;906&nbsp;159&nbsp;2634</a></p>
          </div>
          <div>
            <h2>Email Address</h2>
            <p className=' text-white/45'><a href="mailto:chromax.design@gmail.com">chromax.designs@gmail.com</a></p>
          </div>
          <SocialMedia />
        </div>
      </section>
    </main>
    </>
  )
}

export default Contact