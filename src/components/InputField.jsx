import React from 'react'

const InputField = ({ label, type = 'text', id, isTextArea = false }) => {
    return (
      <div className='space-y-4'>
        <label htmlFor={id} className='inline-block capitalize'>{label}</label>
        {
          isTextArea ? <textarea id={id} className=' w-full min-h-38 rounded-none border border-white/45'></textarea> : <input type="text" id={id} className='w-full p-3 rounded-none border border-white/45' />
        }
      </div>
    )
  }

export default InputField