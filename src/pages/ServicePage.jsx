import "./ServicePage.css";
import heroBanner from "../assets/service_banner.png";

const ServicePage = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <img src={heroBanner} className="service-hero-image" alt="DI Services" />
        <div className="service-hero-gradient" />

        <div className="service-hero-content">
          <p className="service-hero-kicker">Our Services</p>
          <h1 className="service-hero-title">
            DI Polyclinic offers comprehensive
            <br />
            medical services
          </h1>
          <p className="service-hero-subtitle">
            Diverse Innovation Pharmaceuticals Pvt. Ltd. is a
            <br />
            growing healthcare organization committed to
            <br />
            delivering comprehensive and accessible 
            <br />
            medical
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="service-cards-section">
        <div className="service-card">
          <h3 className="service-card-title">Doctor with comprehensive care</h3>
          <p className="service-card-text">
            Expert physicians providing holistic care for acute and chronic
            conditions, focusing on prevention, diagnosis, and personalized
            treatment plans.
          </p>
        </div>
        <div className="service-card">
          <h3 className="service-card-title">DI Diabetologist</h3>
          <p className="service-card-text">
            Specialized diabetes care with advanced diagnostics, lifestyle
            guidance, and medication management tailored to each patient.
          </p>
        </div>
        <div className="service-card">
          <h3 className="service-card-title">DI Laboratory services</h3>
          <p className="service-card-text">
            State-of-the-art diagnostic laboratory supporting accurate and
            timely test results for informed medical decisions.
          </p>
        </div>
        <div className="service-card">
          <h3 className="service-card-title">DI Laboratory services</h3>
          <p className="service-card-text">
            State-of-the-art diagnostic laboratory supporting accurate and
            timely test results for informed medical decisions.
          </p>
        </div>
        <div className="service-card">
          <h3 className="service-card-title">DI Laboratory services</h3>
          <p className="service-card-text">
            State-of-the-art diagnostic laboratory supporting accurate and
            timely test results for informed medical decisions.
          </p>
        </div>
      </section>

      {/* Research & Interconnect Section */}
      <section className="service-research-section">
        <div className="service-research-card">
          <h3 className="service-research-title">DI Research</h3>
          <p className="service-research-text">
            Innovative pharmaceutical research driving new therapies and
            solutions that improve patient outcomes and quality of life.
          </p>
        </div>
        <div className="service-research-card">
          <h3 className="service-research-title">Interconnected 24/7</h3>
          <p className="service-research-text">
            Seamless coordination between our clinics, pharmacies, and
            laboratories ensures round-the-clock support and continuity of care.
          </p>
        </div>
      </section>

      {/* Stats & Community Section */}
      <section className="service-community-section">
        <div className="service-community-text">
          <p className="service-community-kicker">Our Community</p>
          <h2 className="service-community-title">
            Join a Growing
            <br />
            Community of Business
            <br />
            &amp; Logistics
          </h2>
          <p className="service-community-description">
            Diverse innovation pharmaceuticals Pvt. Ltd is a
            growing healthcare organization committed to delivering
            comprehensive and accessible medical services.
          </p>
          <button className="service-community-btn">Call Us</button>
        </div>
        <div className="service-community-stats">
          <div className="service-stat-card">
            <p className="service-stat-number">300+</p>
            <p className="service-stat-label">Happy Patients</p>
          </div>
          <div className="service-stat-card">
            <p className="service-stat-number">20+</p>
            <p className="service-stat-label">Medical Services</p>
          </div>
          <div className="service-stat-card">
            <p className="service-stat-number">30+</p>
            <p className="service-stat-label">Partner Hospitals</p>
          </div>
          <div className="service-stat-card">
            <p className="service-stat-number">128+</p>
            <p className="service-stat-label">Daily Consultations</p>
          </div>
        </div>
      </section>

      {/* Brands Strip */}
      <section className="service-brands-section">
        <span className="service-brand-pill">DI Pharma</span>
        <span className="service-brand-pill">DI Will</span>
        <span className="service-brand-pill">DI Research</span>
        <span className="service-brand-pill">DI Indo Continental</span>
      </section>

      {/* Contact & Form Section */}
      <section className="service-contact-section">
        <div className="service-contact-card">
          <h3 className="service-contact-title">Contact</h3>
          <p className="service-contact-phone">+91 9708009020</p>
          <p className="service-contact-address">
            10 Anson Road, #34-08,
            <br />
            International Plaza, Suite 405,
            <br />
            Singapore 079903
          </p>
          <p className="service-contact-hours-title">Opening hours:</p>
          <p className="service-contact-hours">
            Monday - Friday: 10:00 AM - 8:00 PM
            <br />
            Saturday: 10:00 AM - 2:00 PM
          </p>
          <p className="service-contact-follow">Stay Connected</p>
          <div className="service-social-row">
            <span className="service-social-icon">Fb</span>
            <span className="service-social-icon">In</span>
            <span className="service-social-icon">X</span>
            <span className="service-social-icon">Ig</span>
          </div>
        </div>

        <div className="service-form-card">
          <h3 className="service-form-title">Let&apos;s Get In Touch</h3>
          <p className="service-form-subtitle">
            Leave us your queries and we&apos;ll get back to
            <br />
            you within 24 hours.
          </p>
          <form className="service-form">
            <div className="service-form-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="service-form-row">
              <input type="tel" placeholder="Phone number" />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea rows="4" placeholder="Message" />
            <button type="submit" className="service-form-submit">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer Highlight */}
      <section className="service-footer-highlight">
        <p className="service-footer-text">
          Diverse innovation pharmaceuticals Pvt. Ltd. is a
          growing healthcare organization committed to
          delivering comprehensive and accessible
          medical care.
        </p>
        <p className="service-footer-sign">
          Arjun Kumar
          <br />
          Managing Director
        </p>
      </section>
    </div>
  );
};

export default ServicePage;


