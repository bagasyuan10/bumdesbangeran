import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './BUMDes.css';
import { Link } from 'react-router-dom';

const sectionVariants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenRight: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

function BUMDes() {
  const [headerRef, headerInView] = useInView({ triggerOnce: false });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: false });

  const headerControls = useAnimation();
  const servicesControls = useAnimation();

  React.useEffect(() => {
    if (headerInView) {
      headerControls.start('visible');
    } else {
      headerControls.start('hiddenLeft');
    }
  }, [headerControls, headerInView]);

  React.useEffect(() => {
    if (servicesInView) {
      servicesControls.start('visible');
    } else {
      servicesControls.start('hiddenRight');
    }
  }, [servicesControls, servicesInView]);

  const services = [
    {
      title: "Usaha Milik BUMDes",
      description: "Menyediakan berbagai usaha milik desa yang dikelola untuk kesejahteraan masyarakat.",
      link: "/usaha",
      promo: "Bangkitkan potensi lokal bersama kami!"
    },
    {
      title: "Produk Unggulan",
      description: "Produk terbaik desa, mulai dari olahan pertanian hingga peternakan.",
      link: "/potensi",
      promo: "Temukan kualitas terbaik dari desa kami!"
    },
    {
      title: "Pelatihan SDM",
      description: "Program pelatihan untuk meningkatkan kapasitas sumber daya manusia desa.",
      link: "#pelatihan-sdm",
      promo: "Tingkatkan keterampilan, majukan masa depan!"
    },
    {
      title: "Pemasaran Digital",
      description: "Strategi pemasaran digital untuk memperluas jangkauan pasar produk desa hingga keluar desa.",
      link: "/product",
      promo: "Bawa produk desa ke tingkat lebih tinggi!"
    },
    {
      title: "Layanan Konsultasi",
      description: "Konsultasi usaha dan manajemen untuk warga yang ingin memulai usaha.",
      link: "/contact",
      promo: "Mulailah langkah menuju sukses bersama kami!"
    }
  ];

  return (
    <div className="bumdes">
      <motion.header
        ref={headerRef}
        className="header"
        initial="hiddenLeft"
        animate={headerControls}
        variants={sectionVariants}
      >
        <h1>Usaha dan Produk</h1>
        <p>
          Badan Usaha Milik Desa (BUMDes) merupakan usaha desa yang dikelola oleh Pemerintah Desa, dan berbadan hukum. Pemerintah Desa dapat mendirikan Badan Usaha Milik Desa sesuai dengan kebutuhan dan potensi Desa. Pembentukan Badan Usaha Milik Desa ditetapkan dengan Peraturan Desa. Kepengurusan Badan Usaha Milik Desa terdiri dari Pemerintah Desa dan masyarakat desa setempat.
        </p>
      </motion.header>

      <motion.section
        ref={servicesRef}
        className="services"
        initial="hiddenRight"
        animate={servicesControls}
        variants={sectionVariants}
      >
        <h2>Layanan & Produk</h2>
        <div className="services-list">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p className="promo">{service.promo}</p>
              <Link to={service.link} className="button">Selengkapnya</Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default BUMDes;