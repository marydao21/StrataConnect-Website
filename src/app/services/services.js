// pages/services.js
import styles from '../styles/services.css';

export default function Services() {
  return (
    <div className={styles['services-container']}>
      <h1>Our Services</h1>
      <p>We offer a variety of services to manage your strata effectively:</p>
      <div className={styles['services-list']}>
        <div className={styles['service-item']}>
          <h2>Online Communication Platform</h2>
          <p>Stay connected with residents, owners, and strata managers through a seamless communication platform.</p>
        </div>
        <div className={styles['service-item']}>
          <h2>Maintenance Requests</h2>
          <p>Easily submit and track maintenance requests for common areas and facilities.</p>
        </div>
        <div className={styles['service-item']}>
          <h2>Owner & Resident Management</h2>
          <p>Manage resident and owner details efficiently, with complete transparency and control.</p>
        </div>
      </div>
    </div>
  );
}
