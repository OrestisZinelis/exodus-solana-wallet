import React from 'react'
import plusAsset from '../images/networks/PLUS asset.svg'

interface NetworkLogoProps {
  src: string
  name: string
  ticker: string
}

const NetworkLogo: React.FC<NetworkLogoProps> = ({ src, name, ticker }) => {
  const tooltipArrowStyles: React.CSSProperties = {
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: `20px solid var(--tw-bg-opacity, 1) white`
  }
  return (
    <div className="relative group">
      <img src={src} alt={name} className="w-12 h-12" />
      <div className="absolute invisible group-hover:visible bg-white dark:bg-dark-primary p-2 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg -translate-y-2 transform -translate-x-1/2 left-1/2 bottom-full mb-2 tooltip whitespace-nowrap">
        <span className="text-primary dark:text-dark-text font-bold">{name}</span>
        <span className="text-primary dark:text-dark-text opacity-50 ml-1">({ticker})</span>
        <div className="tooltip-arrow" aria-hidden="true" style={tooltipArrowStyles}></div>
      </div>
    </div>
  )
}

interface NetworksSupportedBannerProps {
  number: string
  networks: NetworkLogoProps[]
  buttonText: string
}

const NetworksSupportedBanner: React.FC<NetworksSupportedBannerProps> = ({ number, networks, buttonText }) => {
  return (
    <div className="text-center my-8">
      <div className="relative font-roboto font-thin text-9xl text-text dark:text-dark-text">
        <div className="opacity-10">{number}</div>
        <span className="absolute font-roboto text-lg top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-text dark:text-dark-text">
          {number} supported networks
        </span>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-4 px-16">
        {networks.map((network, index) => (
          <NetworkLogo key={index} {...network} />
        ))}
        <img src={plusAsset} alt="Plus" className="w-12 h-12" />
      </div>
      <button className="bg-primary  dark:bg-dark-primary  text-text dark:text-dark-text rounded-full p-4 mt-16 hover:bg-opacity-50 transition-colors w-[240px]">
        {buttonText.toLocaleUpperCase()}
      </button>
    </div>
  )
}

export default NetworksSupportedBanner