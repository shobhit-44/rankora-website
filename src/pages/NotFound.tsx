import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.code}>404</div>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.subtitle}>
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className={styles.actions}>
            <Link to="/" className={styles.primary}>
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <Link to="/contact" className={styles.secondary}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
