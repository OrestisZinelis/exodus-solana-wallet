import React from 'react'

interface DottedImageHeaderProps {
  imgSrc?: string | null
  header?: string | null
  text?: string | null
  imageSize?: string
}

const DottedImageHeader: React.FC<DottedImageHeaderProps> = ({
  imgSrc = '',
  header = 'Default Header',
  text = 'Default text content',
  imageSize = 'h-24 w-24'
}) => {
  return (
    <div className="flex flex-col items-center text-center p-4 max-w-md">
      <div className="border-dotted border-4 border-gray-200 p-3 mb-12 flex justify-center items-center">
        {imgSrc ? (
          <img src={imgSrc} alt={header ?? 'Header'} className={`object-contain ${imageSize}`} />
        ) : (
          <div className={`${imageSize} bg-gray-200`} />
        )}
      </div>
      <h2 className="text-text dark:text-dark-text text-lg leading-8 mb-4">{header}</h2>
      <p className="text-text dark:text-dark-text opacity-60">{text}</p>
    </div>
  )
}

export default DottedImageHeader
