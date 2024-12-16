import React from 'react'
import CompactBanner from './CompactBanner'

interface FeatureBannerLayoutProps {
  imgSrc?: string | null
  coinLogoSrc?: string | null
  title?: string | null
  text?: string | null
  reverse?: boolean | null
  imageWidth?: string | null
}

const FeatureBannerLayout: React.FC<FeatureBannerLayoutProps> = ({
  imgSrc = null,
  coinLogoSrc = null,
  title = null,
  text = null,
  reverse = false,
  imageWidth = 'md:w-1/2 max-w-4xl'
}) => {
  const flexDirection = reverse ? 'md:flex-row-reverse' : 'md:flex-row'

  return (
    <div className={`flex ${flexDirection} justify-center items-center gap-4 mx-auto flex-col md:flex-row`}>
      <div className={`${imageWidth} flex-initial mb-4 md:mb-0`}>
        <img src={imgSrc ?? ''} alt="Side" className="w-full object-contain" />
      </div>
      <div className="flex-initial">
        <CompactBanner
          coinLogoSrc={coinLogoSrc ?? ''}
          title={title ?? ''}
          text={text ?? ''}
          width="w-full md:max-w-md"
        />
      </div>
    </div>
  )
}

export default FeatureBannerLayout
