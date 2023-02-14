import React from 'react'
import SearchIcon from '../assets/searchIcon.svg'
import BookIcon from '../assets/bookIcon.svg'
import PlayIcon from '../assets/PlayIcon.svg'

const thirdcomponent = () => {
  return (
    <div className='grid md:grid-cols-3 gap-8   md:py-40 bg-white'>
       
        <div className='flex items-center flex-col  '> 
        <img className='w-[40%]' src={SearchIcon} alt="" />
        <h2 className='text-2xl font-bold mt-4'>Search</h2>
        <p className='text-center mt-2'>Are you looking to play after work, organize your Sunday Five's football match? Explore the largest network of sports facilities whole over the Kerala</p>
        </div>

        <div className='flex items-center flex-col md:my-0 my-24'>
        <img className='w-[40%]' src={BookIcon} alt="" />
        <h2 className='text-2xl font-bold mt-4'>Book</h2>
        <p className='text-center mt-2'>Once you’ve found the perfect ground, court or gym, Connectwith the venue through the Book Now Button to make online booking & secure easier payment</p>
        </div>

        <div className='flex items-center flex-col md:my-0 my-24'>
        <img className='w-[40%]' src={PlayIcon} alt="" />
        <h2 className='text-2xl font-bold mt-4'> Play</h2>
        <p className='text-center mt-2'>Once you’ve found the perfect ground, court or gym, Connect with the venue through the Book Now Button to make online booking & secure easier payment</p>

        </div>

    </div>
  )
}

export default thirdcomponent