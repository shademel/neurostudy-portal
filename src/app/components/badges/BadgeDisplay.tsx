import React from "react";
import Image from "next/image";
import styles from "./badgeDisplay.module.css"; 

import bg from "../../images/backgroundTest.png";
import goldBadge from "../../images/goldBadge.svg";

export default function BadgeDisplay() {
  return (
    <div className={styles.badgeContainer}>
      
      <Image src={bg} alt="Background" />

      
      <div className={styles.badgeOverlay}>
        <Image src={goldBadge} alt="Gold Badge" />
      </div>
    </div>
  );
}
