import React from 'react'
import { Link } from 'gatsby' // Import Link from Gatsby

interface HeaderProps {
  title?: string
  logoSrc?: string
}

const Header: React.FC<HeaderProps> = ({ title, logoSrc }) => {
  return (
    <header className="bg-primary dark:bg-dark-primary shadow py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-center">
        {logoSrc && (
          <Link to="/">
            <img src={logoSrc} alt="logo" className="mr-4 h-8" />
          </Link>
        )}
        {title && <h1 className="text-xl font-bold text-text dark:text-dark-text">{title}</h1>}
      </div>
    </header>
  )
}

export default Header