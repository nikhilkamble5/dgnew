import React from "react";
import { timelineData } from "../../../assets/constant";
import styles from '../../styles/timeline.module.css';


const Timeline = () => {
  return (
    <section className={styles.timeline_container}>
      {timelineData.map((item, index) => (
        <div
          className={styles.timeline_item}
          data-position={item.position}
          key={index}
        >
          <div className={styles.year_wrapper}>
            <h3 style={{ backgroundColor: item.yearBgColor }}>
              {item.year}
            </h3>
            <p>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Timeline;

