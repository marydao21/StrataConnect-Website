// pages/index.js
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles['home-container']}>
      <h1>Stay Connected, Stay in Control of Your Strata</h1>
      <p>Bringing residents, owners, and strata managers together on one seamless platform.</p>
      <button className={styles['cta-button']}>Request a Quote</button>
      {/* Optional: If you'd like a background image like in the screenshot */}
      <img 
        className={styles['-image']} 
        src="/images/picture3.jpg"  
        alt="Strata management" 
      />
    </div>
  );
}
