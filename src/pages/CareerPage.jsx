import { useState } from "react";
import "./CareerPage.css";
import heroBanner from "../assets/career_banner.png";
import personOne from "../assets/career_person1.png";
import personTwo from "../assets/career_person2.png";

const openRoles = [
  {
    title: "Research Assistant - Pharmaceutical Formulations",
    role_focus:" Assisting in formulation development, sample testing, documentation.",
    location: "Chennai, Tamil Nadu",
    type: "Full Time",
  },
  {
    title: "Research Analyst - Pharmaceutical Formulations",
    role_focus:" Assisting in formulation development, sample testing, documentation.",
    location: "Chennai, Tamil Nadu",
    type: "Full Time",
  },
  {
    title: "Research Assistant - Pharmaceutical Formulations",
    role_focus:" Assisting in formulation development, sample testing, documentation.",
    location: "Chennai, Tamil Nadu",
    type: "Full Time",
  },
  {
    title: "Research Assistant - Pharmaceutical Formulations",
    role_focus:" Assisting in formulation development, sample testing, documentation.",
    location: "Chennai, Tamil Nadu",
    type: "Full Time",
  },
];

const CareerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Your application has been received. Our team will respond within 24 hours."
    );
    setFormData({ name: "", email: "", phone: "", role: "", message: "" });
  };

  return (
    <div className="career-page">
      <section className="career-hero">
        <img src={heroBanner} className="career-hero-image" alt="" />

        <div className="career-hero-gradient"></div>

        <div className="career-hero-content">
          <h2 className="hero-subtitle">GROW WITH A</h2>

          <h1 className="hero-title">
            <span className="purpose-box">PURPOSE</span>
          </h1>
        </div>
      </section>
      <div className="hero-info">
        <p className="hero-sub">Join Us in Shaping the Future of Healthcare</p>
        <p className="hero-description">
          At Dipharmanovation, we are committed to improving lives through
          high-quality pharmaceuticals, medical essentials, and healthcare
          solutions. Our team is growing, and we’re shaping the future of
          healthcare.We’re growing fast and looking for passionate people to
          help us improve lives through high-quality pharmaceuticals, medical
          essentials, and healthcare solutions.
        </p>
      </div>

      <section className="positions-section">
        <div className="positions-content">
          <div className="positions-text">
            <h2 className="section-title">Open Positions</h2>
            <p className="section-lead"></p>
            <div className="hero-card">
              <p className="card-title">Open Positions</p>
              <ul className="role-list">
                {openRoles.map((role, idx) => (
                  <li key={idx} className="role-item">
                    <div>
                      <p className="role-name">{role.title}</p>
                      <p className="role-meta">{role.role_focus}</p>
                      <p className="role-meta">
                        {role.location} • {role.type}
                      </p>
                    </div>
                    <button className="role-apply">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.9537 2.76827C5.76786 2.77483 5.58261 2.74389 5.40899 2.6773C5.23537 2.61071 5.07694 2.50983 4.94316 2.38069C4.80937 2.25154 4.70297 2.09677 4.63029 1.9256C4.55762 1.75444 4.52017 1.57039 4.52017 1.38444C4.52017 1.19849 4.55762 1.01445 4.63029 0.843284C4.70297 0.672122 4.80937 0.517351 4.94316 0.388204C5.07694 0.259056 5.23537 0.158177 5.40899 0.0915876C5.58261 0.024998 5.76786 -0.00593996 5.9537 0.000619815L16.3977 0.000620299C16.7646 0.000848641 17.1164 0.146718 17.3759 0.406185C17.6354 0.665653 17.7812 1.0175 17.7815 1.38444L17.7815 11.8284C17.788 12.0142 17.7571 12.1995 17.6905 12.3731C17.6239 12.5467 17.523 12.7052 17.3939 12.8389C17.2647 12.9727 17.11 13.0791 16.9388 13.1518C16.7677 13.2245 16.5836 13.2619 16.3977 13.2619C16.2117 13.2619 16.0277 13.2245 15.8565 13.1518C15.6853 13.0791 15.5306 12.9727 15.4014 12.8389C15.2723 12.7052 15.1714 12.5467 15.1048 12.3731C15.0382 12.1995 15.0073 12.0142 15.0138 11.8284L15.0138 4.72651L2.36359 17.3767C2.10391 17.6364 1.75171 17.7823 1.38447 17.7823C1.01723 17.7823 0.665028 17.6364 0.405349 17.3767C0.14567 17.1171 -0.000216123 16.7649 -0.00021646 16.3976C-0.000215786 16.0304 0.145671 15.6782 0.405349 15.4185L13.0556 2.76827L5.9537 2.76827Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hero-portrait framed">
            <img src={personOne} alt="Team member" />
          </div>
        </div>
      </section>

      <section className="career-contact-block">
        <div className="contact-card">
          <div className="contact-portrait">
            <img src={personTwo} alt="Work with us" />
          </div>
          <div className="contact-form-wrapper">
            <div className="contact-form-header">
              <p className="contact-kicker">
                Our Team Will Respond to You Within 24 Hours
              </p>
              <h2 className="contact-heading">Let’s Connect</h2>
            </div>
            <form className="career-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Applying for role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <div className="form-actions">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
