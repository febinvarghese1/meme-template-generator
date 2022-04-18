import React from 'react'

const Meme = ({title,url}) => {
  return (
      <div className='flex items-center justify-center'>
    <div className='flex flex-col items-center justify-center sm:w-9/12 sm-h-9/12'>
        <h2 className='text-4xl font-bold p-6 text-center '>{title}</h2>
        <img className='object-contain' src={url} />
    </div>
    </div>
  )
}

export default Meme