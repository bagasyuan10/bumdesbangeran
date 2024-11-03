import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './TeamSection.css';
import Kades from "../assets/kepaladesa.jpg";
import Ketua from "../assets/Sofwan.png";
import Sekretaris from "../assets/Basori.jpg";
import Bendahara from "../assets/Jainul.jpg";
import Kosong from "../assets/Default.webp";

const teamMemberVariants = {
  hiddenLeft: { opacity: 0, x: -100, scale: 0.8 },
  hiddenRight: { opacity: 0, x: 100, scale: 0.8 },
  hiddenTop: { opacity: 0, y: -100, scale: 0.8 },
  hiddenBottom: { opacity: 0, y: 100, scale: 0.8 },
  visible: { 
    opacity: 1, 
    x: 0, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.7, ease: 'easeOut' } 
  },
};

function TeamMember({ src, name, title, description, animationDirection }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start(animationDirection);
    }
  }, [controls, inView, animationDirection]);

  return (
    <motion.div
      ref={ref}
      className="team-member"
      initial={animationDirection}
      animate={controls}
      variants={teamMemberVariants}
      whileHover={{ scale: 1.05, rotate: 2 }}
    >
      <motion.img 
        src={src} 
        alt={name} 
        className="team-member-img" 
        whileHover={{ scale: 1.1 }}
      />
      <div className="member-info">
        <motion.p className="member-name" whileHover={{ color: '#007acc' }}>{name}</motion.p>
        <motion.p className="member-title" whileHover={{ color: '#3498db' }}>{title}</motion.p>
        <motion.p className="member-description" initial={{ opacity: 0.8 }} animate={{ opacity: 1 }}>{description}</motion.p>
      </div>
    </motion.div>
  );
}

function TeamSection() {
  return (
    <section className="team-section">
      <h2>Perangkat BUMDes</h2>
      <p>Perangkat BUMDes bertugas untuk mengelola dan mengembangkan usaha desa dalam meningkatkan ekonomi lokal.</p>
      <div className="team-members">
        <TeamMember
          src={Kades}
          name="Al Adzim, M.Si"
          title="Kepala Desa"
          description="Memimpin dan mengawasi seluruh kegiatan BUMDes untuk kesejahteraan desa."
          animationDirection="hiddenLeft"
        />
        <TeamMember
          src={Ketua}
          name="Sofwan Hadi"
          title="Ketua BUMDes"
          description="Mengelola operasional BUMDes serta memastikan perkembangan usaha yang berkelanjutan."
          animationDirection="hiddenRight"
        />
        <TeamMember
          src={Sekretaris}
          name="Basori"
          title="Sekretaris BUMDes"
          description="Mengelola administrasi dan dokumentasi BUMDes."
          animationDirection="hiddenTop"
        />
        <TeamMember
          src={Bendahara}
          name="Jainul"
          title="Bendahara BUMDes"
          description="Mengelola keuangan dan laporan keuangan BUMDes."
          animationDirection="hiddenBottom"
        />
        <TeamMember
          src={Kosong}
          name="H. Suntari"
          title="Pengawas"
          description="Memastikan pengelolaan BUMDes berjalan sesuai peraturan dan rencana kerja."
          animationDirection="hiddenLeft"
        />
        <TeamMember
          src={Kosong}
          name="Zainul Arifin"
          title="Pengawas"
          description="Memastikan pengelolaan BUMDes berjalan sesuai peraturan dan rencana kerja."
          animationDirection="hiddenRight"
        />
      </div>
    </section>
  );
}

export default TeamSection;