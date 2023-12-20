import React from "react";
import styles from "./button.module.css";
import MyPrimaryFull from "./MyPrimaryFull";
import MyPrimaryFullDisabled from "./MyPrimaryFullDisabled";
import MyPrimary from "./MyPrimary";
import MySecondary from "./MySecondary";
import MySecondaryFull from "./MySecondaryFull";
import MyTertiary from "./MyTertiary";
import MyTertiaryFull from "./MyTertiaryFull";

export default function ButtonDisplay() {
  return (
    <div>
      <div className={styles.display}>
        <MyPrimaryFull />
      </div>
      <div className={styles.display}>
        <MyPrimaryFullDisabled />
      </div>
      <div className={styles.display}>
        <MyPrimary />
      </div>
      <div className={styles.display}>
        <MySecondaryFull />
      </div>
      <div className={styles.display}>
        <MySecondary />
      </div>
      <div className={styles.display}>
        <MyTertiary />
      </div>
      <div className={styles.display}>
        <MyTertiaryFull />
      </div>
    </div>
  );
}
