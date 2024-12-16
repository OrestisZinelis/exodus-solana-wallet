import React from 'react'
import CoinLogo from './CoinLogo'

interface CompactBannerProps {
  coinLogoSrc: string
  title: string
  text: string
  width: string
}

const CompactBanner: React.FC<CompactBannerProps> = ({ coinLogoSrc, title, text, width = 'w-64' }) => {
  return (
    <div className={`flex gap-8 flex-col ${width} p-4`}>
      <div className="self-start">
        <CoinLogo src={coinLogoSrc} className="h-12" />
      </div>

      <div className="flex flex-col gap-8 mt-auto">
        <h2 className="text-5xl font-roboto font-light text-text dark:text-dark-text break-words leading-snug">
          {title}
        </h2>
        <p className="text-base font-roboto text-text dark:text-dark-text break-words opacity-60">{text}</p>
      </div>
    </div>
  )
}

export default CompactBanner
