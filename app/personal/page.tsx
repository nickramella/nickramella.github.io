"use client";
import Image from 'next/image'
import { useSelector } from 'react-redux';
import { selectIsSmallScreen } from '@/lib/rootSlice';

const page = () => {
  const isSmallScreen = useSelector(selectIsSmallScreen);

  return (
    <div className="h-screen">
      <div className={`my-25 mx-[10%] anim-fade ${!isSmallScreen && "flex space-x-10"}`}>
          <div className="relative h-100 w-100 overflow-hidden rounded-full">
            <Image
              src="/WebsitePersonal.gif"
              alt="Circular image"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className={`${isSmallScreen ? "pt-5" : "max-w-[40%]"}`}>
            <h1 className="text-4xl font-bold pb-5">Life Outside of Work</h1>
            <p>Nature and landscape photography are some of my greatest joys in life. 
              In my free time I like to take my cameras out and go explore somewhere new. 
              You may find me anywhere from the Sierra Nevada mountains, to Death Valley National Park or even diving off the California Coast. 
            </p>
          </div>
      </div>
    </div>
  )
}

export default page