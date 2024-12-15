import React from 'react'

interface CoinLogoProps {
  src: string
  alt: string
  className?: string
}

const CoinLogo: React.FC<CoinLogoProps> = ({ src, alt, className = '' }) => {
  return <img src={src} alt={alt} className={`object-contain ${className}`} />
}

export default CoinLogo
