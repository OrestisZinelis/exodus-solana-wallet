import React from 'react'

interface DottedImageHeaderProps {
  imgSrc: string
  header: string
  text: string
  imageSize?: string
}

const DottedImageHeader: React.FC<DottedImageHeaderProps> = ({ imgSrc, header, text, imageSize = 'h-24 w-24' }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 max-w-md">
      <div className="border-dotted border-4 border-gray-200 p-3 mb-12 flex justify-center items-center">
        <img src={imgSrc} alt={header} className={`object-contain ${imageSize}`} />
      </div>
      <h2 className="text-text dark:text-dark-text text-lg leading-8 mb-4">{header}</h2>
      <p className="text-text dark:text-dark-text opacity-60">{text}</p>
    </div>
  )
}

export default DottedImageHeader
