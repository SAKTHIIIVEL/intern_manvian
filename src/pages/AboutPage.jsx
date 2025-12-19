import "./AboutPage.css";
import aboutTeam1 from "../assets/about/about_team1.jpg";
import aboutLabTubes from "../assets/about/about_lab_tubes.jpg";
import aboutPills from "../assets/about/about_pills.jpg";
import aboutScientist from "../assets/about/about_scientist.jpg";
import aboutShip from "../assets/about/about_ship.jpg";
import aboutTeamCloseup from "../assets/about/scientist.jpg";
import magaeshImage from "../assets/about/magaesh.png";
import seniorManager1 from "../assets/about/senior_manager_1.png";
import seniorManager2 from "../assets/about/senior_manager_2.png";
import { useEffect, useRef } from "react";



const AboutPage = () => {
  const sectionRef = useRef(null);
  const teamRef = useRef(null);
  const commitmentRef = useRef(null);


  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        sectionRef.current.classList.add("about-visible");
      } else {
        sectionRef.current.classList.remove("about-visible");
      }
    },
    {
      threshold: 0.3, // triggers when 30% visible
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);

//for team section animation
useEffect(() => {
  if (!teamRef.current) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        teamRef.current.classList.add("team-visible");
      } else {
        teamRef.current.classList.remove("team-visible");
      }
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(teamRef.current);

  return () => observer.disconnect();
}, []);

//for commitment section animation
useEffect(() => {
  if (!commitmentRef.current) return;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        commitmentRef.current.classList.add("commitment-visible");
      } else {
        commitmentRef.current.classList.remove("commitment-visible");
      }
    },
    {
      threshold: 0.3,
    }
  );
  observer.observe(commitmentRef.current);

  return () => observer.disconnect();
}, []);


  return (
    <div className="about-page">
      {/* ABOUT Dipharmainnovation Section */}
      <section className="about-hero-section" ref={sectionRef}>
        <div className="about-hero-container">
          <div className="about-hero-content">
            <p className="about-kicker">ABOUT</p>
            <h1 className="about-title">Dipharmainnovation</h1>
            <p className="about-description">
              Dipharmainnovation is a forward-thinking pharmaceutical and
              healthcare solutions provider committed to improving access to
              quality medical products. With a strong focus on reliability,
              innovation, and customer satisfaction.
            </p>
          </div>
          <div className="about-image-collage">
            <div className="collage-item collage-top-left">
              <img src={aboutTeam1} alt="Medical Professionals" />
            </div>
            <div className="collage-item collage-middle-left">
              <img src={aboutLabTubes} alt="Laboratory Equipment" />
            </div>
            <div className="collage-item collage-top-right">
              <img src={aboutPills} alt="Pharmaceutical Pills" />
            </div>
            <div className="collage-item collage-bottom-right">
              <img src={aboutTeamCloseup} alt="Medical Team" />
            </div>
            <div className="collage-item collage-bottom-left">
              <img src={aboutShip} alt="Cargo Ship" />
            </div>
            <div className="collage-item collage-middle-right">
              <img src={aboutScientist} alt="Scientist with Microscope" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Our Vision Section */}
      <section className="mission-vision-section">
        {/* BACKGROUND ROAD */}
        <div className="mission-road-bg">
          <svg viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path d="M 0 250 C 300 50, 900 450, 1200 150" className="road-bg" />
            <path
              d="M 0 250 C 300 50, 900 450, 1200 150"
              className="road-dash"
            />
          </svg>

          {/* Airplane */}
          <div className="bg-airplane">✈️</div>

          {/* Pins */}
          <div className="bg-pin pin-left">
            📍
            <span>2014 – Dr. Will</span>
          </div>

          <div className="bg-pin pin-right">
            📍
            <span>2010 – Indo Continental</span>
          </div>
        </div>

        {/* FOREGROUND CONTENT */}
        <div className="mission-vision-container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              To enhance the <strong>healthcare ecosystem</strong> by providing{" "}
              <strong>
                safe, high-quality, and affordable medical products
              </strong>{" "}
              that support better patient outcomes and{" "}
              <strong>empower healthcare providers</strong> in their day-to-day
              operations.
            </p>
          </div>

          <div className="vision-content">
            <h2>Our Vision</h2>
            <p>
              To become one of <strong>India’s most trusted names</strong> in
              pharmaceuticals and healthcare supplies by driving innovation,
              strengthening partnerships, and continuously{" "}
              <strong>elevating product standards</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="team-section" ref={teamRef}>
        <div className="team-wrapper">
          {/* LEFT CONTENT */}
          <div className="team-left">
            <p className="team-label">Our Team</p>

            <h2>Dedicated Minds Driving Healthcare Forward</h2>
          </div>

          {/* RIGHT CONTENT */}
          <div className="team-right">
            {/* MAIN CARD */}
            <div className="team-card active">
              <img src={magaeshImage} alt="Mr. Magesh Kumar" />

              <div className="team-info">
                <h3>Mr. Magesh Kumar</h3>
                <p>Director, Dr.will</p>
              </div>
            </div>

            {/* SIDE CARD */}
            <div className="team-card side">
              <img src={seniorManager1} alt="Senior Manager" />

              <span className="vertical-text">Senior Manager</span>
            </div>

            {/* SIDE CARD */}
            <div className="team-card side">
              <img src={seniorManager2} alt="Senior Manager" />
              <span className="vertical-text">Senior Manager</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="commitment-section" ref={commitmentRef}>
        <div className="commitment-content">
          <h2 className="commitment-title">Our Commitment</h2>
          <p className="commitment-text">
            At <strong>Dipharmainnovation,</strong> we believe{" "}
            <strong>healthcare is more than a business </strong> - it's a{" "}
            <strong> responsibility</strong>. Our commitment to{" "}
            <strong>excellence</strong> drives us to provide products that
            contribute to a <strong>healthier, safer,</strong> and more{" "}
            <strong>efficient medical environment.</strong>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
