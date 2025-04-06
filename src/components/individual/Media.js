import React from 'react';
import styles from '../styles/media.module.css';
import pressOne from "../../assets/images/press-release.webp";
import pressTwo from "../../assets/images/press-release2.webp";
import heroImage from "../../assets/images/hero.png";
import ServicesBanner from '../ServicesBanner';

const Media = () => {
  return (
    <>
    <ServicesBanner
  title="Media Center"
  heroImage={heroImage}
  compactMode={true}
  caseStudyDescription="DG FutureTech media center provides the latest news and press releases about our company and services."
/>
  
    <div className={styles["media-manage"]}>
      <div className={styles["media-text-section"]}>
        {/* <h1>Media Center</h1> */}
        {/* <p>DG FutureTech media center provides the latest news and press releases about our company and services.</p>
         */}
        <div className={styles["media-right-data"]} data-aos="fade-up">
          <h4>Press Releases</h4>
          <ul className={styles["japnese-media-point-list"]}>
            <li>DG FutureTech Announces New Cloud Services</li>
            <p>DG FutureTech has launched a suite of innovative cloud services designed to help businesses scale effectively.</p>
            <li>Digital Transformation Success Stories</li>
            <p>Learn how our clients have successfully navigated their digital transformation journeys with DG FutureTech.</p>
            <li>DG FutureTech Recognized as Industry Leader</li>
            <p>DG FutureTech has been recognized as a leader in IT services by industry analysts for the third consecutive year.</p>
            <li>The Future of AI in Business Operations</li>
            <p>Our CTO discusses how artificial intelligence is transforming modern business operations and what to expect in the coming years.</p>
          </ul>
        </div>
      </div>

      <div className={styles["media-content"]}>
        <img src={pressTwo} alt="Press Release 2" className={styles.mediaOne} />
        <img src={pressOne} alt="Press Release 1" className={styles.mediaOne} />
      </div>
    </div>
    </>
  );
};

export default Media;