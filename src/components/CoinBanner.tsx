import React from 'react'
import CoinLogo from './CoinLogo'

interface CoinBannerProps {
  backgroundImage?: string | null
  coinLogo?: string | null
  title?: string | null
  text1?: string | null
  text2?: string | null
  logoSize?: string | null
  height?: string | null
}

const CoinBanner: React.FC<CoinBannerProps> = ({
  backgroundImage,
  coinLogo,
  title,
  text1,
  text2,
  logoSize = 'h-20 w-20',
  height = 'auto'
}) => {
  return (
    <div
      className="relative w-full bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${backgroundImage ?? ''})`,
        backgroundSize: 'cover',
        height: height ?? 'auto'
      }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center text-center py-40">
        <CoinLogo src={coinLogo ?? ''} alt="Coin Logo" className={logoSize ?? ''} />
        <h1 className="font-roboto font-light mt-4 mb-8 text-7xl leading-tight text-text dark:text-dark-text">
          {title ?? ''}
        </h1>
        <p className="font-roboto font-light mt-2 text-4xl leading-relaxed text-text dark:text-dark-text opacity-60">
          {text1 ?? ''}
        </p>
        <p className="font-roboto font-light mt-2 text-4xl leading-relaxed text-text dark:text-dark-text opacity-60">
          {text2 ?? ''}
        </p>
      </div>
    </div>
  )
}

export default CoinBanner
