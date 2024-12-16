import React from 'react'

interface CoinLogoProps {
  src: string
  className?: string
}

const CoinLogo: React.FC<CoinLogoProps> = ({ src, className = '' }) => {
  return <img src={src} alt="Coin Logo" className={`object-contain ${className}`} />
}

export default CoinLogo
