import "./ServicePage.css";
import { useState } from "react";
import heroBanner from "../assets/service_banner.png";
import syringe from "../assets/icons/service_injection.png";
import tablet from "../assets/icons/service_tablet.png";
import lab from "../assets/icons/service_lab.png";
import research from "../assets/icons/service_research.png";
import globe from "../assets/icons/service_globe.png";
import dipharma from "../assets/brands/dipharma.png";
// import diresearch from "../assets/brands/diresearch.png";
// import drwill from "../assets/brands/drwill.png";
// import indocontent from "../assets/brands/indocontent.png";

const COUNTRY_RULES = {
  "+91": { name: "India", min: 10, max: 10 },
  "+60": { name: "Malaysia", min: 9, max: 10 },
  "+1": { name: "USA", min: 10, max: 10 },
};

const ServicePage = () => {
  const [formData, setFormData] = useState({
    countryCode: "+91",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email.trim()))
      newErrors.email = "Enter a valid email";
    const phoneDigits = formData.phone.replace(/\D/g, "");
    const rules = COUNTRY_RULES[formData.countryCode];

    if (!phoneDigits) {
      newErrors.phone = "Phone number is required";
    } else if (
      phoneDigits.length < rules.min ||
      phoneDigits.length > rules.max
    ) {
      newErrors.phone = `Enter a valid ${rules.name} number (${rules.min}-${rules.max} digits)`;
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log("Form submitted:", formData);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <img
          src={heroBanner}
          className="service-hero-image"
          alt="DI Services"
        />
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
        <div className="service-card card-1">
          <div className="service-card-inner">
            <div className="service-card-icon-wrapper">
              <img
                src={syringe}
                alt="Service Icon"
                className="service-card-icon"
              />
            </div>
            <h3 className="service-card-title">Doctor will</h3>
            <p className="service-card-text">
              Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt.
              Vestibulum ante ipsum primis Sed porttitor lectus nibh. Nulla
              porttitor accumsan tincidunt. Vestibulum ante ipsum primis
            </p>
          </div>
        </div>
        <div className="service-card card-2">
          <div className="service-card-inner">
            <div className="service-card-icon-wrapper">
              <img
                src={tablet}
                alt="Service Icon"
                className="service-card-icon"
              />
            </div>
            <h3 className="service-card-title">DI Diabetologist</h3>
            <p className="service-card-text">
              Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt.
              Vestibulum ante ipsum primis Sed porttitor lectus nibh. Nulla
              porttitor accumsan tincidunt. Vestibulum ante ipsum primis
            </p>
          </div>
        </div>
        <div className="service-card card-3">
          <div className="service-card-inner">
            <div className="service-card-icon-wrapper">
              <img src={lab} alt="Service Icon" className="service-card-icon" />
            </div>
            <h3 className="service-card-title">DI Laboratory services</h3>
            <p className="service-card-text">
              Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt.
              Vestibulum ante ipsum primis Sed porttitor lectus nibh. Nulla
              porttitor accumsan tincidunt. Vestibulum ante ipsum primis
            </p>
          </div>
        </div>
        <div className="service-card card-4">
          <div className="service-card-inner">
            <div className="service-card-icon-wrapper">
              <img
                src={research}
                alt="Service Icon"
                className="service-card-icon"
              />
            </div>
            <h3 className="service-card-title">DI Laboratory services</h3>
            <p className="service-card-text">
              Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt.
              Vestibulum ante ipsum primis Sed porttitor lectus nibh. Nulla
              porttitor accumsan tincidunt. Vestibulum ante ipsum primis
            </p>
          </div>
        </div>
        <div className="service-card card-5">
          <div className="service-card-inner">
            <div className="service-card-icon-wrapper">
              <img
                src={globe}
                alt="Service Icon"
                className="service-card-icon"
              />
            </div>
            <h3 className="service-card-title">DI Laboratory services</h3>
            <p className="service-card-text">
              Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt.
              Vestibulum ante ipsum primis Sed porttitor lectus nibh. Nulla
              porttitor accumsan tincidunt. Vestibulum ante ipsum primis
            </p>
          </div>
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
            Diverse Innovation Pharmaceuticals Pvt. Ltd. is agrowing healthcare
            organization committed to delivering comprehensive and accessible
            medical
          </p>
          <button className="service-community-btn">
            Join Us
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="30"
                height="30"
                rx="15"
                stroke="#161952"
              />
              <path
                d="M8 15.5H22M22 15.5L16.75 22M22 15.5L16.75 9"
                stroke="#161952"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="service-community-stats">
          <div className="service-stat-card">
            <p className="service-stat-number">1000+</p>
            <p className="service-stat-label">Products</p>
          </div>
          <div className="service-stat-card">
            <p className="service-stat-number">20+</p>
            <p className="service-stat-label">Dosage Form</p>
          </div>
          <div className="service-stat-card">
            <p className="service-stat-number">30+</p>
            <p className="service-stat-label">Therapeutic Areas</p>
          </div>
          <div className="service-stat-card">
            <p className="service-stat-number">3</p>
            <p className="service-stat-label"> DI Polyclinics</p>
          </div>
        </div>
      </section>

      {/* Brands Strip */}
      <section className="service-brands-section">
        <span className="service-brand-pill">
          <img src={dipharma} alt="diPharma" />
          Di Pharma
        </span>
        <span className="service-brand-pill">
          {/* <img src={drwill} alt="drwill" /> */}
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.5251 4.36153C31.5926 4.16723 31.6005 3.95718 31.5477 3.75838C31.4949 3.55958 31.3839 3.38111 31.2289 3.2459C29.0586 1.37365 26.3407 0.254115 23.4814 0.0546519C18.987 -0.271598 16.2026 0.932152 14.7964 1.82653C14.6562 1.91667 14.5398 2.03915 14.4568 2.18366C14.3739 2.32817 14.3269 2.49049 14.3197 2.65696C14.3125 2.82343 14.3454 2.98919 14.4157 3.14029C14.4859 3.29139 14.5914 3.42342 14.7232 3.52528L26.1776 12.4278C26.4117 12.6093 26.6858 12.7324 26.977 12.7866C27.2682 12.8408 27.5682 12.8247 27.8519 12.7396C28.1357 12.6545 28.395 12.5029 28.6083 12.2973C28.8216 12.0917 28.9827 11.8382 29.0782 11.5578L31.5251 4.36153ZM3.29137 30.7859C3.06409 30.9399 2.89083 31.1613 2.79598 31.419C2.70113 31.6766 2.68946 31.9575 2.76262 32.2222C3.19949 33.7878 4.49699 37.0447 8.18137 40.0072C11.8639 42.9697 16.2214 43.2903 18.0832 43.2453C18.3553 43.2401 18.6188 43.1492 18.8363 42.9856C19.0538 42.822 19.2141 42.594 19.2945 42.334L26.6351 19.0972C27.1657 17.419 25.2851 16.0128 23.8264 16.9934L3.29137 30.7859ZM8.65762 6.26465C8.47972 6.19482 8.28873 6.16468 8.09797 6.17634C7.90722 6.188 7.72131 6.24118 7.55325 6.33215C6.19574 7.0709 2.71575 9.3509 0.919495 14.0309C-0.464255 17.6384 0.0232452 21.6284 0.40387 23.5803C0.529495 24.2178 1.20262 24.5853 1.80637 24.349L23.8357 15.7484C25.4089 15.1353 25.4145 12.9115 23.8451 12.289L8.65762 6.26465ZM41.3351 22.9165C41.9726 23.3478 42.8426 22.9672 42.9532 22.204C43.2457 20.1884 43.497 16.6784 42.3307 14.0309C40.7745 10.5022 38.1345 8.32715 36.8801 7.44215C36.6874 7.30786 36.4552 7.24208 36.2206 7.25534C35.9861 7.26859 35.7628 7.36012 35.5864 7.51528L30.027 12.4465C29.8154 12.6345 29.6495 12.8683 29.5419 13.1301C29.4343 13.3918 29.3878 13.6747 29.4061 13.9572C29.4243 14.2396 29.5068 14.5142 29.6472 14.7599C29.7877 15.0057 29.9823 15.2161 30.2164 15.3753L41.3351 22.9165ZM25.8007 41.7359C25.7445 42.3922 26.3014 42.9359 26.9557 42.8647C29.0614 42.6397 33.3907 41.8034 36.6307 38.7059C38.8823 36.5334 40.4419 33.7442 41.1139 30.6884C41.1535 30.4984 41.1505 30.302 41.1051 30.1133C41.0598 29.9246 40.9731 29.7483 40.8514 29.5972L31.1314 17.6047C30.0776 16.3053 27.9795 16.9465 27.8332 18.6115L25.8007 41.7359Z"
              fill="white"
            />
          </svg>
          Dr.Will
        </span>
        <span className="service-brand-pill">
          {/* <img src={diresearch} alt="diResearch" /> */}
          <svg
            width="35"
            height="45"
            viewBox="0 0 35 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.9922 13.619C34.9922 17.9679 35.0158 22.3158 34.9809 26.6647C34.9658 28.5194 34.7341 30.3531 34.1367 32.1183C33.4904 34.0284 32.5247 35.7334 31.3018 37.2735C29.8857 39.0578 28.2502 40.5768 26.3819 41.8113C24.425 43.1041 22.3306 44.0471 20.1203 44.7116C19.8612 44.79 19.604 44.8764 19.3459 44.9569C19.0943 45.0343 18.9775 44.9428 18.9784 44.6513C18.9794 44.2723 18.9455 43.8923 18.9455 43.5133C18.9483 40.99 18.9568 38.4657 18.9596 35.9425C18.9596 35.6409 18.9492 35.3373 18.9153 35.0377C18.8626 34.5622 19.0755 34.2938 19.4712 34.148C20.5782 33.7399 21.6249 33.199 22.6067 32.5174C24.5664 31.1573 25.9089 29.3146 26.543 26.8858C26.9104 25.4774 26.9867 24.0489 27.0631 22.5993C27.1874 20.261 27.0932 17.9257 27.1375 15.5894C27.1469 15.0928 27.1347 15.0878 26.7135 15.316C24.2554 16.648 21.7983 17.981 19.3421 19.315C18.9587 19.5231 18.921 19.505 18.921 19.0305C18.9181 16.9626 18.8503 14.8917 18.9408 12.8279C19.0227 10.9581 19.7548 9.36367 21.1275 8.12415C22.9053 6.51669 24.9639 5.4149 27.0178 4.29602C28.904 3.26861 30.7789 2.21708 32.6595 1.17862C33.2916 0.829786 33.9257 0.486983 34.5598 0.142169C34.979 -0.0850254 34.9932 -0.0759778 34.9941 0.436719V13.619H34.9922ZM7.88835 19.514C7.88835 20.8209 7.84407 22.1308 7.89777 23.4357C8.00423 26.0414 8.62605 28.4822 10.2277 30.526C10.9739 31.479 11.8793 32.2611 12.9025 32.8703C13.8004 33.4051 14.7359 33.8555 15.7016 34.2304C15.9447 34.3249 16.0512 34.4757 16.0512 34.7693C16.0549 38.0525 16.0644 41.3358 16.0898 44.6191C16.0926 44.9991 15.9089 45.0483 15.6724 44.9659C14.2922 44.4854 12.8771 44.1235 11.5552 43.4459C10.288 42.7965 9.0406 42.125 7.87516 41.2805C6.18965 40.0591 4.73025 38.5884 3.4395 36.9075C2.16948 35.2538 1.22167 33.4172 0.597021 31.3955C0.353004 30.6064 0.151383 29.7861 0.112754 28.9507C-0.0945193 24.5194 0.0524563 20.084 0.0270181 15.6507C-0.00124648 10.5881 0.0213656 5.52448 0.0223078 0.461851C0.0223078 0.105309 0.178391 0.0101418 0.490557 0.176349C2.29572 1.14444 4.09053 2.13264 5.86743 3.15904C7.34755 4.01353 8.8663 4.79162 10.3577 5.624C11.8021 6.42923 13.1644 7.36817 14.3355 8.59261C15.2579 9.55668 15.744 10.7459 15.9268 12.098C16.1642 13.8593 16.1407 15.6306 16.0785 17.3979C16.0568 17.9991 16.0144 18.6012 16.0116 19.2054C16.0116 19.4165 15.9532 19.4869 15.76 19.3824C15.4237 19.2014 15.077 19.0416 14.7453 18.8526C13.4942 18.1378 12.2194 17.4693 10.9588 16.7746C10.0572 16.278 9.14141 15.8106 8.25485 15.2868C7.93357 15.0978 7.88175 15.135 7.88364 15.502C7.89306 16.84 7.88741 18.177 7.88741 19.5151L7.88835 19.514Z"
              fill="white"
            />
          </svg>
          Di Research
        </span>
        <span className="service-brand-pill">
          {/* <img src={indocontent} alt="diIndo Continental" /> */}
          <svg
            width="48"
            height="30"
            viewBox="0 0 48 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.892 5.278C6.08 2.144 9.104 0 12 0C15.308 0 18.232 2.16 20.676 4.666C23.186 7.238 25.61 10.62 27.872 13.854L28.63 14.936C30.65 17.836 32.542 20.544 34.36 22.62C35.376 23.78 36.3 24.66 37.134 25.24C37.974 25.822 38.58 26 39 26C40.368 26 41.546 25.456 42.42 24.39C43.318 23.296 44 21.51 44 18.912C44 13.912 42.586 10.088 40.826 7.566C38.99 4.932 37.02 4 36 4C34.432 4 32.532 5.07 30.242 7.4C30.0604 7.59671 29.8411 7.75496 29.5972 7.86535C29.3532 7.97574 29.0896 8.03603 28.822 8.04264C28.5543 8.04925 28.288 8.00206 28.039 7.90384C27.7899 7.80563 27.563 7.65841 27.3719 7.47091C27.1808 7.2834 27.0293 7.05943 26.9263 6.81227C26.8234 6.56511 26.7711 6.29979 26.7726 6.03205C26.7741 5.76431 26.8293 5.4996 26.9351 5.25361C27.0408 5.00762 27.1948 4.78536 27.388 4.6C29.816 2.126 32.72 0 36 0C38.896 0 41.922 2.144 44.108 5.278C46.37 8.52 48 13.154 48 18.912C48 22.184 47.14 24.944 45.514 26.926C44.7299 27.8959 43.7367 28.6761 42.6088 29.2084C41.4808 29.7407 40.2472 30.0113 39 30C37.462 30 36.064 29.366 34.854 28.526C33.638 27.684 32.468 26.532 31.35 25.256C29.376 23 27.35 20.094 25.354 17.232L24.594 16.146C22.308 12.88 20.062 9.762 17.814 7.46C15.5 5.09 13.584 4 12 4C10.982 4 9.01 4.932 7.172 7.566C5.412 10.088 4 13.91 4 18.914C4 21.51 4.682 23.294 5.58 24.39C5.98874 24.9023 6.50968 25.3139 7.10263 25.593C7.69559 25.8722 8.34473 26.0114 9 26C9.77 26 10.982 25.406 12.724 23.616C14.382 21.912 16.14 19.536 18.034 16.848C18.1853 16.6333 18.3774 16.4505 18.5993 16.31C18.8212 16.1695 19.0687 16.0741 19.3275 16.0293C19.5863 15.9844 19.8514 15.991 20.1076 16.0486C20.3639 16.1062 20.6063 16.2137 20.821 16.365C21.0357 16.5163 21.2185 16.7084 21.359 16.9303C21.4995 17.1522 21.5949 17.3997 21.6397 17.6585C21.6846 17.9173 21.678 18.1824 21.6204 18.4386C21.5628 18.6949 21.4553 18.9373 21.304 19.152C19.42 21.826 17.496 24.448 15.59 26.406C13.77 28.276 11.536 30 9 30C7.75281 30.0113 6.51918 29.7407 5.39123 29.2084C4.26327 28.6761 3.27014 27.8959 2.486 26.926C0.86 24.944 0 22.186 0 18.912C0 13.156 1.63 8.518 3.892 5.278Z"
              fill="white"
            />
          </svg>
          Indo Continental
        </span>
      </section>

      {/* Contact & Form Section */}
      <section className="service-contact-section">
        <div className="service-contact-content">
          <div className="service-contact-info-panel">
            <div className="service-info-item">
              <h3 className="service-info-label">Contact</h3>
              <p className="service-info-value">+91-9677787817</p>
            </div>

            <div className="service-info-item">
              <h3 className="service-info-label">Address</h3>
              <p className="service-info-value">
                123 Business Avenue, Suite 456, Innovation City, Country-000000
              </p>
            </div>

            <div className="service-info-item">
              <h3 className="service-info-label">Open Time</h3>
              <div className="service-info-value">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="service-info-item">
              <h3 className="service-info-label">Stay Connected</h3>
              <div className="service-social-icons">
                <a
                  href="#"
                  className="service-social-icon"
                  aria-label="Facebook"
                >
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.8337 18.9998C34.8337 10.2598 27.7403 3.1665 19.0003 3.1665C10.2603 3.1665 3.16699 10.2598 3.16699 18.9998C3.16699 26.6632 8.61366 33.044 15.8337 34.5165V23.7498H12.667V18.9998H15.8337V15.0415C15.8337 11.9857 18.3195 9.49984 21.3753 9.49984H25.3337V14.2498H22.167C21.2962 14.2498 20.5837 14.9623 20.5837 15.8332V18.9998H25.3337V23.7498H20.5837V34.754C28.5795 33.9623 34.8337 27.2173 34.8337 18.9998Z"
                      fill="#222065"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="service-social-icon"
                  aria-label="WhatsApp"
                >
                  <svg
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5017 3.0835C27.0163 3.0835 33.9183 9.98554 33.9183 18.5002C33.9183 27.0148 27.0163 33.9168 18.5017 33.9168C15.7771 33.9215 13.1005 33.2005 10.7471 31.8279L3.09115 33.9168L5.17548 26.2578C3.8018 23.9036 3.08021 21.2259 3.08498 18.5002C3.08498 9.98554 9.98703 3.0835 18.5017 3.0835ZM13.2477 11.2543L12.9393 11.2667C12.74 11.2804 12.5452 11.3328 12.3658 11.4208C12.1987 11.5157 12.046 11.634 11.9126 11.7723C11.7276 11.9465 11.6227 12.0976 11.5102 12.2441C10.94 12.9855 10.6329 13.8957 10.6376 14.831C10.6407 15.5864 10.838 16.3218 11.1464 17.0094C11.7769 18.4 12.8144 19.8722 14.1834 21.2366C14.5134 21.565 14.8371 21.8949 15.1855 22.2017C16.8867 23.6993 18.9137 24.7793 21.1055 25.356L21.9812 25.4901C22.2664 25.5055 22.5516 25.4839 22.8384 25.47C23.2873 25.4464 23.7256 25.3248 24.1226 25.1139C24.3243 25.0096 24.5213 24.8964 24.713 24.7747C24.713 24.7747 24.7783 24.7306 24.9057 24.636C25.1139 24.4818 25.2418 24.3724 25.4145 24.192C25.544 24.0584 25.6519 23.9032 25.7382 23.7264C25.8585 23.4751 25.9787 22.9957 26.0281 22.5964C26.0651 22.2911 26.0543 22.1246 26.0497 22.0213C26.0435 21.8564 25.9063 21.6852 25.7567 21.6128L24.8595 21.2104C24.8595 21.2104 23.5182 20.6261 22.6981 20.253C22.6122 20.2157 22.5203 20.1942 22.4267 20.1898C22.3212 20.1788 22.2146 20.1906 22.1141 20.2243C22.0135 20.2581 21.9214 20.3131 21.844 20.3856C21.8363 20.3825 21.733 20.4704 20.6184 21.8209C20.5544 21.9069 20.4663 21.9718 20.3652 22.0075C20.2642 22.0432 20.1548 22.048 20.051 22.0213C19.9506 21.9946 19.8521 21.9605 19.7566 21.9196C19.5654 21.8394 19.4991 21.8086 19.3681 21.7531C18.483 21.3675 17.6637 20.8458 16.9399 20.2068C16.7457 20.0372 16.5653 19.8522 16.3803 19.6734C15.7738 19.0925 15.2453 18.4354 14.8078 17.7185L14.7169 17.5721C14.6525 17.4731 14.5998 17.3671 14.5596 17.256C14.501 17.0294 14.6537 16.8475 14.6537 16.8475C14.6537 16.8475 15.0283 16.4374 15.2025 16.2154C15.3721 15.9996 15.5154 15.7899 15.6079 15.6404C15.7899 15.3475 15.8469 15.0468 15.7513 14.814C15.3197 13.7595 14.8736 12.7107 14.4132 11.6675C14.3222 11.4609 14.0524 11.3129 13.8073 11.2836C13.724 11.2733 13.6408 11.2651 13.5575 11.259C13.3505 11.2471 13.143 11.2491 12.9362 11.2651L13.2477 11.2543Z"
                      fill="#222065"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="service-social-icon"
                  aria-label="Linkedin"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.5952 10.262V12.2418C15.0098 11.6103 15.5813 11.0972 16.2537 10.7528C16.9261 10.4084 17.6764 10.2445 18.4312 10.2772C22.462 10.2772 23.3335 12.7972 23.3335 16.0755V22.75H19.6002V16.8327C19.6002 15.421 19.3155 13.6057 17.1175 13.6057C14.986 13.6057 14.622 15.1422 14.622 16.7277V22.75H10.9004V10.262H14.5952ZM8.4002 7.12367C8.39974 7.4935 8.29011 7.85497 8.08506 8.16276C7.88001 8.47055 7.58866 8.71095 7.24753 8.85383C6.90655 8.99556 6.53111 9.03264 6.16899 8.96034C5.80687 8.88804 5.47445 8.70963 5.21403 8.44783C4.95313 8.18587 4.7755 7.85261 4.70349 7.48996C4.63148 7.12731 4.6683 6.75147 4.80933 6.4097C4.95035 6.06792 5.18928 5.77547 5.49607 5.56913C5.80286 5.36278 6.16381 5.25175 6.53353 5.25C6.77926 5.25 7.02256 5.29851 7.2495 5.39276C7.47643 5.487 7.68252 5.62513 7.85595 5.79921C8.02937 5.97328 8.16673 6.17989 8.26012 6.40717C8.35352 6.63446 8.40112 6.87794 8.4002 7.12367Z"
                      fill="#222065"
                    />
                    <path
                      d="M8.4 10.2771H4.66666V22.7499H8.4V10.2771Z"
                      fill="#222065"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="service-social-icon"
                  aria-label="Instagram"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.0003 11.6665C14.8511 11.6665 13.7489 12.1231 12.9362 12.9357C12.1235 13.7484 11.667 14.8506 11.667 15.9998C11.667 17.1491 12.1235 18.2513 12.9362 19.064C13.7489 19.8766 14.8511 20.3332 16.0003 20.3332C17.1496 20.3332 18.2518 19.8766 19.0645 19.064C19.8771 18.2513 20.3337 17.1491 20.3337 15.9998C20.3337 14.8506 19.8771 13.7484 19.0645 12.9357C18.2518 12.1231 17.1496 11.6665 16.0003 11.6665Z"
                      fill="#222065"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.02682 4.10919C13.6615 3.59576 18.3388 3.59576 22.9735 4.10919C25.5055 4.39186 27.5468 6.38519 27.8442 8.92653C28.3934 13.6261 28.3934 18.3736 27.8442 23.0732C27.5468 25.6145 25.5055 27.6079 22.9748 27.8919C18.3397 28.4054 13.662 28.4054 9.02682 27.8919C6.49482 27.6079 4.45349 25.6145 4.15616 23.0745C3.6068 18.3745 3.6068 13.6265 4.15616 8.92653C4.45349 6.38519 6.49482 4.39186 9.02682 4.10919ZM22.6668 7.99986C22.3132 7.99986 21.9741 8.14034 21.724 8.39038C21.474 8.64043 21.3335 8.97957 21.3335 9.33319C21.3335 9.68681 21.474 10.026 21.724 10.276C21.9741 10.526 22.3132 10.6665 22.6668 10.6665C23.0204 10.6665 23.3596 10.526 23.6096 10.276C23.8597 10.026 24.0002 9.68681 24.0002 9.33319C24.0002 8.97957 23.8597 8.64043 23.6096 8.39038C23.3596 8.14034 23.0204 7.99986 22.6668 7.99986ZM9.66682 15.9999C9.66682 14.3202 10.3341 12.7092 11.5218 11.5215C12.7095 10.3338 14.3205 9.66653 16.0002 9.66653C17.6799 9.66653 19.2908 10.3338 20.4785 11.5215C21.6662 12.7092 22.3335 14.3202 22.3335 15.9999C22.3335 17.6796 21.6662 19.2905 20.4785 20.4782C19.2908 21.6659 17.6799 22.3332 16.0002 22.3332C14.3205 22.3332 12.7095 21.6659 11.5218 20.4782C10.3341 19.2905 9.66682 17.6796 9.66682 15.9999Z"
                      fill="#222065"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="service-contact-form-panel">
            <h2 className="service-form-title">Let's Get In Touch</h2>
            <p className="service-form-subtitle">
              Let us know your concern, and we'll get back to you within 24
              hours.
            </p>

            <form onSubmit={handleSubmit} className="service-contact-form">
              <div className="service-form-row">
                <div className="service-form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  {errors.firstName && (
                    <span className="service-input-error">
                      {errors.firstName}
                    </span>
                  )}
                </div>
                <div className="service-form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  {errors.lastName && (
                    <span className="service-input-error">
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>

              <div className="service-form-row">
                <div className="service-form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <span className="service-input-error">{errors.email}</span>
                  )}
                </div>
                <div className="service-form-group">
                  <div className="service-phone-input-wrapper">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="service-country-code-select"
                    >
                      <option value="+91">+91</option>
                      <option value="+60">+60</option>
                      <option value="+1">+1</option>
                    </select>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {errors.phone && (
                    <span className="service-input-error">{errors.phone}</span>
                  )}
                </div>
              </div>

              <div className="service-form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                {errors.subject && (
                  <span className="service-input-error">{errors.subject}</span>
                )}
              </div>

              <div className="service-form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.message && (
                  <span className="service-input-error">{errors.message}</span>
                )}
              </div>

              <button type="submit" className="service-send-message-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Highlight */}
      <section className="quote-section">
        {/* Left Quote */}
        <svg
          className="quote-mark quote-mark-left"
          width="253"
          height="187"
          viewBox="0 0 253 187"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M253 187H139.816V84.8179L199.497 0H235.756L200.256 80.1429H253V187ZM113.184 187H0V84.8179L59.6814 0H95.9403L60.4404 80.1429H113.184V187Z"
            fill="#1A1D53"
          />
        </svg>

        {/* Right Quote */}
        <svg
          className="quote-mark quote-mark-right"
          width="274"
          height="202"
          viewBox="0 0 274 202"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H122.579V110.379L57.9438 202H18.6753L57.1218 115.429H0V0ZM151.421 0H274V110.379L209.365 202H170.096L208.543 115.429H151.421V0Z"
            fill="#1A1D53"
          />
        </svg>

        {/* Content */}
        <div className="quote-content">
          <p className="quote-text">
            Diverse Innovation Pharmaceuticals Pvt. Ltd. is a growing healthcare
            organization committed to delivering comprehensive and accessible
            medical
          </p>

          <h4 className="quote-author">Arjun Kumar</h4>
          <span className="quote-role">Managing Director</span>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
