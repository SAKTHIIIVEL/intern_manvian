import React from 'react';
import { motion } from 'framer-motion';
import styles from './Services.module.css';
import { useNavigate } from 'react-router-dom';

const servicesData = [
  {
    id: 1,
    title: "Diverse Innovation",
    text: "Diverse Innovation Pharmaceuticals Pvt. Ltd. is a growing healthcare organization committed to delivering comprehensive and accessible medical services to the community."
  },
  {
    id: 2,
    title: "Diverse Innovation",
    text: "Diverse Innovation Pharmaceuticals Pvt. Ltd. is a growing healthcare organization committed to delivering comprehensive and accessible medical services to the community."
  },
  {
    id: 3,
    title: "Diverse Innovation",
    text: "Diverse Innovation Pharmaceuticals Pvt. Ltd. is a growing healthcare organization committed to delivering comprehensive and accessible medical services to the community."
  }
];

const Services = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.headTitle}>
            <motion.h2 
           className={styles.heading}
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <p className={styles.description}>
          Diverse Innovation Pharmaceuticals Pvt. Ltd. is a growing healthcare organization committed to delivering comprehensive and accessible medical services to the community.
        </p>
        </div>
        

        <div className={styles.grid}>
          {servicesData.map((service, index) => (
            <motion.div 
              key={service.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.number}>{service.id}</div>
              <div className={styles.cardContent}>
                 <p className={styles.cardText}>{service.text}</p>
                 {/* Reusing text for visual filler as per design */}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className={styles.buttonContainer}>
           <motion.button 
             className={styles.viewButton}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             onClick={()=>{navigate("/services")}}
           >
             View Services
           </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Services;
