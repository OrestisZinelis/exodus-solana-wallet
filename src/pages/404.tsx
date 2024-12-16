import * as React from 'react'
import { Link, HeadFC } from 'gatsby'

const NotFoundPage: React.FC = () => {
  return (
    <main style={{ textAlign: 'center', padding: '4rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ fontSize: '1.125rem', textDecoration: 'underline' }}>
        Go back to the homepage
      </Link>
    </main>
  )
}

export const Head: HeadFC = () => <title>404 - Page Not Found</title>

export default NotFoundPage
