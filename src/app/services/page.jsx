import './services.css';

export default function ServicesPage() {
  return (
    <div className="services-container">
      <h1>Services</h1>
      <p>
        StrataConnect partners with property owners, residents, and developers
        throughout the entire strata lifecycle — from development planning and
        scheme establishment, to efficient day-to-day management and
        future-ready solutions.
      </p>

      <div className="services-list">
        <div className="service-item">
          <h2>Owners</h2>
          <p>
            Personalized management approach to suit the specific needs of each
            property and its owners. Services support transparency, community
            harmony, and long-term asset value.
          </p>
        </div>

        <div className="service-item">
          <h2>Developers</h2>
          <p>
            - Advising on the structure and setup of strata schemes.<br />
            - Registering strata plans and preparing custom by-laws.<br />
            - Setting up initial budgets and levies.<br />
            - Organizing strata insurance.<br />
            - Creating the strata roll and financial records.<br />
            - Coordinating inaugural meetings.<br />
            - Disclosure documents for buyers.<br />
            - Supervising fit-out works and damage bonds.<br />
            - Supporting defect resolution.<br />
            - Facilitating handovers and First AGM.
          </p>
        </div>

        <div className="service-item">
          <h2>Financial Management</h2>
          <p>
            - Budgeting & Planning: Annual budgets and levy calculations.<br />
            - Accounting: Reports and real-time access.<br />
            - Levy Management: Notices and payment options.<br />
            - Arrears Control: Monitor and recover overdue levies.
          </p>
        </div>

        <div className="service-item">
          <h2>Administration Management</h2>
          <p>
            - Records & Documentation: Digital access to all records.<br />
            - Insurance Handling: Quotes, renewals, claims.<br />
            - Meeting Coordination: Agendas, notices, minutes.<br />
            - Essential Services: Inspections, compliance, safety certificates.
          </p>
        </div>
      </div>
    </div>
  );
}
