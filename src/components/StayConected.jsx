import React from 'react'
import styles from './StayConnected.module.css';
const StayConected = () => {
  return (
    <div className={styles.footer} id="contact">
        <div className={styles.container}>
        <div className={styles.content}>
          <h2>Stay Connected For more Insights and Updates</h2>
          <p>
            Diverse Innovation Pharmaceuticals Pvt. Ltd. is a growing healthcare organization committed to delivering comprehensive
          </p>
          
          <div className={styles.newsletter}>
            <input type="email" placeholder="Enter your email" className={styles.input} />
            <button className={styles.button}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StayConected