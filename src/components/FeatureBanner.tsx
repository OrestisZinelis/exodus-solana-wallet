import React from 'react'
import CompactBanner from './CompactBanner'

interface FeatureBannerLayoutProps {
  imgSrc: string
  coinLogoSrc: string
  title: string
  text: string
  reverse?: boolean // If true, display banner on the left and image on the right
  imageWidth?: string
}

const FeatureBannerLayout: React.FC<FeatureBannerLayoutProps> = ({
  imgSrc,
  coinLogoSrc,
  title,
  text,
  reverse = false,
  imageWidth = 'md:w-1/2 max-w-4xl'
}) => {
  const flexDirection = reverse ? 'md:flex-row-reverse' : 'md:flex-row'

  return (
    <div className={`flex ${flexDirection} justify-center items-center gap-4 mx-auto flex-col md:flex-row`}>
      <div className={`${imageWidth} flex-initial mb-4 md:mb-0`}>
        <img src={imgSrc} alt="Side Image" className="w-full object-contain" />
      </div>
      <div className="flex-initial">
        <CompactBanner coinLogoSrc={coinLogoSrc} title={title} text={text} width="w-full md:max-w-md" />
      </div>
    </div>
  )
}

export default FeatureBannerLayout
