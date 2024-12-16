import React from 'react'

interface BasicFeatureBannerProps {
  title: string
  imgSrc: string
}
const BasicFeatureBanner: React.FC<BasicFeatureBannerProps> = ({ title, imgSrc }) => {
  return (
    <div className="flex flex-col items-center gap-8 mx-auto text-center px-4 md:px-0" style={{ maxWidth: '60vw' }}>
      <h1 className="font-roboto font-thin leading-snug text-text dark:text-dark-text md:text-6xl md:leading-snug">
        {title}
      </h1>
      <img src={imgSrc} alt="Descriptive alt text" className="w-full max-w-md md:max-w-full h-auto object-contain" />
    </div>
  )
}

export default BasicFeatureBanner
