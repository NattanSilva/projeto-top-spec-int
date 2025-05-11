'use client'

import Image from 'next/image'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const imagesList = [
  {
    id: 1,
    imageUrl: '/image-product-1.jpg',
    tumbUrl: '/image-product-1-thumbnail.jpg',
  },
  {
    id: 2,
    imageUrl: '/image-product-2.jpg',
    tumbUrl: '/image-product-2-thumbnail.jpg',
  },
  {
    id: 3,
    imageUrl: '/image-product-3.jpg',
    tumbUrl: '/image-product-3-thumbnail.jpg',
  },
  {
    id: 4,
    imageUrl: '/image-product-4.jpg',
    tumbUrl: '/image-product-4-thumbnail.jpg',
  },
]

export function ProductCard() {
  const [currentImagePosition, setCurrentImagePosition] = useState(0)
  const [quantity, setQuantity] = useState(0)

  const changeImage = (position: number) => {
    setCurrentImagePosition(position)
  }
  return (
    <section className='w-[85%] flex justify-between items-center gap-10 p-16'>
      <div className='w-[45%] flex flex-col gap-8'>
        <Image
          src={imagesList[currentImagePosition].imageUrl}
          width={1000}
          height={1000}
          alt=''
          className='w-full h-[400px] rounded-xl'
        />
        <ul className='w-full flex justify-center items-center gap-5'>
          {imagesList.map((image) => (
            <li
              key={image.id}
              className={twMerge(
                'w-20 h-20 rounded-xl border-4 border-white overflow-hidden',
                image.id - 1 === currentImagePosition && 'border-primary-orange'
              )}
            >
              <button
                className='w-full h-full'
                onClick={() => changeImage(image.id - 1)}
              >
                <Image src={image.tumbUrl} alt='' width={176} height={176} />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-[50%] flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <span className='text-dark-grayish-blue text-sm font-medium'>
            {'Sneaker Company'.toUpperCase()}
          </span>
          <h1 className='font-bold text-4xl'>Fall Limited Edition Sneakers</h1>
        </div>
        <div className='flex flex-col'>
          <p className='text-dark-grayish-blue mb-3'>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className='flex items-center gap-4'>
            <span className='font-bold text-2xl'>$125.00</span>
            <p className='font-bold px-2 rounded-md bg-black-75 text-white'>
              50%
            </p>
          </div>
          <span className='text-dark-grayish-blue font-bold mt-1 line-through'>
            $250.00
          </span>
        </div>
        <div className='flex items-center justify-between'>
          <div className=' w-[35%] flex items-center justify-between p-3 rounded-md bg-grayish-blue-95'>
            <button className='select-none cursor-pointer'>
              <Image
                src={'icon-minus.svg'}
                alt=''
                width={12}
                height={4}
                onClick={() => {
                  if (quantity > 0) {
                    setQuantity(quantity - 1)
                  }
                }}
              />
            </button>
            <span className='font-bold text-xl select-none'>{quantity}</span>
            <button className='select-none cursor-pointer'>
              <Image
                src={'icon-plus.svg'}
                alt=''
                width={12}
                height={12}
                onClick={() => setQuantity(quantity + 1)}
              />
            </button>
          </div>
          <button className='w-[60%] flex items-center justify-center p-3 rounded-md bg-primary-orange transition-colors hover:bg-secondary-orange cursor-pointer'>
            <Image
              src={'icon-cart.svg'}
              alt=''
              width={20}
              height={20}
              className='select-none'
            />
            <span className='ml-2 font-medium text-xl select-none'>
              Add to cart
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
