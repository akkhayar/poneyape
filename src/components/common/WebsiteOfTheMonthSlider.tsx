import React from 'react'
import Image, { StaticImageData } from 'next/image'

type websiteCardFormat = {
  id: number,
  image: string,
  title: string,
  author_name: string,
  author_image: string,
  link: string
}

const WebsiteOfTheMonthSlider = () => {

  const websiteCard: websiteCardFormat[] = [
    {
      id: 1,
      image: "/eg.png",
      title: 'Website Title',
      author_name: 'Author Name',
      author_image: '/profile.png',
      link: 'https://www.example.com',
    },
    {
      id: 2,
      image: "/eg.png",
      title: 'Website Title',
      author_name: 'Author Name',
      author_image: '/profile.png',
      link: 'https://www.example.com',
    },
    {
      id: 3,
      image: "/eg.png",
      title: 'Website Title',
      author_name: 'Author Name',
      author_image: '/profile.png',
      link: 'https://www.example.com',
    },
    {
      id: 4,
      image: "/eg.png",
      title: 'Website Title',
      author_name: 'Author Name',
      author_image: '/profile.png',
      link: 'https://www.example.com',
    },
  ]

  return (
    <>

      <div className='tab-wrapper flex space-x-10 overflow-x-auto mb-28'>
        {websiteCard.map((card) => (
          <div key={card.id} className="rounded-xl relative group">
            <Image
              className='cursor-pointer object-cover min-h-[430px] min-w-[416px] rounded-xl transition duration-1000'
              src={card.image}
              alt="Website Image"
              width={416}
              height={430}
            />
            <div className="rounded-xl absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className='mx-4 my-6 absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition duration-300'>
              <p className='font-semibold text-2xl text-white'>{card.title}</p>
              <div className='flex space-x-2'>
                <p className='text-white'>By</p>
                <Image
                  className='rounded-full'
                  src={card.author_image}
                  alt="Author Image"
                  width={32}
                  height={32}
                />
                <p className='underline font-bold text-white'>{card.author_name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-12 flex justify-end space-x-4'>
        <svg className='right' width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="1.38867" width="47" height="47" rx="23.5" stroke="black" />
          <path d="M32 23.8887H19.83L25.42 18.2987L24 16.8887L16 24.8887L24 32.8887L25.41 31.4787L19.83 25.8887H32V23.8887Z" fill="#1B1B1B" />
        </svg>

        <svg className='left' width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="1.38867" width="47" height="47" rx="23.5" stroke="black" />
          <path d="M24 16.8887L22.59 18.2987L28.17 23.8887H16V25.8887H28.17L22.59 31.4787L24 32.8887L32 24.8887L24 16.8887Z" fill="#1B1B1B" />
        </svg>

      </div>
    </>
  )
}

export default WebsiteOfTheMonthSlider