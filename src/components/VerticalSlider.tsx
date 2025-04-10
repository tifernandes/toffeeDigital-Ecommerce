'use client'

import { HTMLAttributes, useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'

// Função para gerar array de imagens dos produtos
const generateProductImages = () => {
  return [
    '/produtos/verticalSlider/IMG_0006.jpg',
    '/produtos/verticalSlider/IMG_0005(4).jpg',
    '/produtos/verticalSlider/IMG_0002.jpg',
    '/produtos/verticalSlider/EXPOSITOR-VERMELHO-COM-CARRINHOS.jpg',
    '/produtos/verticalSlider/EXPOSITOR-BRANCO-B.jpg',
    '/produtos/verticalSlider/TKB0029.jpg',
    '/produtos/verticalSlider/IMG_00310036.jpg',
    '/produtos/verticalSlider/IMG_0068.jpg',
    '/produtos/verticalSlider/IMG_0060B.jpg',
    '/produtos/verticalSlider/IMG_0060_C-BASE_B.jpg',
    '/produtos/verticalSlider/IMG_0052 (2).jpg',
    '/produtos/verticalSlider/IMG_0046.jpg',
    '/produtos/verticalSlider/IMG_0044.jpg',
    '/produtos/verticalSlider/IMG_0043 (2).jpg',
    '/produtos/verticalSlider/IMG_0035.jpg',
    '/produtos/verticalSlider/IMG_0034B.jpg',
    '/produtos/verticalSlider/IMG_0032.jpg',
    '/produtos/verticalSlider/IMG_0026.jpg',
    '/produtos/verticalSlider/IMG_0023.png',
    '/produtos/verticalSlider/IMG_0021B.jpg',
    '/produtos/verticalSlider/IMG_0018.png',
    '/produtos/verticalSlider/IMG_0013-(1).jpg',
    '/produtos/verticalSlider/IMG_0009B.jpg',
    '/produtos/verticalSlider/IMG_0008.jpg',
    '/produtos/verticalSlider/IMG_0006-(1).jpg',
  ];
};

const IMAGES = generateProductImages();

function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = []
  for (let i = 0; i < array.length; i++) {
    const index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function SliderColumn({
  images,
  className,
  imageClassName,
  msPerPixel = 0,
}: {
  images: string[]
  className?: string
  imageClassName?: (imageIndex: number) => string
  msPerPixel?: number
}) {
  const columnRef = useRef<HTMLDivElement | null>(null)
  const [columnHeight, setColumnHeight] = useState(0)
  const duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) return

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={cn('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}>
      {images.concat(images).map((imgSrc, index) => (
        <SliderImage
          key={index}
          className={imageClassName?.(index % images.length)}
          imgSrc={imgSrc}
        />
      ))}
    </div>
  )
}

interface SliderImageProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
}

function SliderImage({ imgSrc, className, ...props }: SliderImageProps) {
  const POSSIBLE_ANIMATION_DELAYS = [
    '0s',
    '0.1s',
    '0.2s',
    '0.3s',
    '0.4s',
    '0.5s',
  ]

  const animationDelay =
    POSSIBLE_ANIMATION_DELAYS[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
    ]

  return (
    <div
      className={cn(
        'animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}>
      <div className="relative h-48 w-full">
        <Image
          src={imgSrc}
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}

function SliderGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.4 })
  const columns = splitArray(IMAGES, 3)
  const column1 = columns[0]
  const column2 = columns[1]
  const column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className='relative -mx-4 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 md:grid-cols-2 lg:grid-cols-3'>
      {isInView ? (
        <>
          <SliderColumn
            images={[...column1, ...column3.flat(), ...column2]}
            imageClassName={(imageIndex) =>
              cn({
                'md:hidden': imageIndex >= column1.length + column3[0].length,
                'lg:hidden': imageIndex >= column1.length,
              })
            }
            msPerPixel={10}
          />
          <SliderColumn
            images={[...column2, ...column3[1]]}
            className='hidden md:block'
            imageClassName={(imageIndex) =>
              imageIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <SliderColumn
            images={column3.flat()}
            className='hidden md:block'
            msPerPixel={10}
          />
        </>
      ) : null}
    </div>
  )
}

export function VerticalSlider() {
  return (
    <div className='relative max-w-5xl mx-auto px-4'>
      <SliderGrid />
    </div>
  )
}

export default VerticalSlider; 