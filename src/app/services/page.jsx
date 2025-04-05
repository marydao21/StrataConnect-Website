import './services.css';

export default function ServicesPage() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>Explore what StrataConnect offers:</p>
      <div className="services-list">
        <div className="service-item">
          <h2>Maintenance</h2>
          <p>We take care of property repairs and services.</p>
        </div>
        <div className="service-item">
          <h2>Finance</h2>
          <p>Managing levies and budget planning.</p>
        </div>
        <div className="service-item">
          <h2>Communication</h2>
          <p>Stay in touch with owners and residents easily.</p>
        </div>
      </div>
    </div>
  );
}
