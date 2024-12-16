import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import DottedImageHeader from './DottedImageHeader'

interface FeatureCardsProps {
  title?: string | null
  items?: Array<{
    imgSrc?: string | null
    header?: string | null
    text?: string | null
  }> | null
}

const FeatureCards: React.FC<FeatureCardsProps> = ({ title, items }) => {
  return (
    <div className="text-center my-8">
      <h2 className="font-roboto font-regular text-text dark:text-dark-text uppercase mb-6 opacity-60 text-xs tracking-widest">
        {title ?? ''}
      </h2>
      <div className="flex flex-wrap justify-center md:space-x-4">
        {items?.map((item, index) => (
          <DottedImageHeader key={uuidv4()} imgSrc={item?.imgSrc} header={item?.header} text={item?.text} />
        ))}
      </div>
    </div>
  )
}

export default FeatureCards
