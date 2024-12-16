import React from 'react'
import DottedImageHeader from './DottedImageHeader'

interface FeatureCardsProps {
  title: string
  items: Array<{
    imgSrc: string
    header: string
    text: string
  }>
}

const FeatureCards: React.FC<FeatureCardsProps> = ({ title, items }) => {
  return (
    <div className="text-center my-8">
      <h2 className="font-roboto font-regular text-text dark:text-dark-text uppercase mb-6 opacity-60 text-xs tracking-widest">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center md:space-x-4">
        {items.map((item, index) => (
          <DottedImageHeader key={index} imgSrc={item.imgSrc} header={item.header} text={item.text} />
        ))}
      </div>
    </div>
  )
}

export default FeatureCards
