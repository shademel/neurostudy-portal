import React from "react";
import styles from "./button.module.css";
import Image from "next/image";
export enum ButtonStyle {
  PrimaryFull = "primary-full",
  Secondary = "secondary",
  SecondaryFull = "secondary-full",
  Tertiary = "tertiary",
  TertiaryFull = "tertiary-full",
}
interface ActionButtonProps {
  label: string;
  icon: string;
  style?: ButtonStyle;
}
export default function ActionButton({
  label,
  icon,
  style,
}: ActionButtonProps) {
  let buttonStyles;

  switch (style) {
    case "primary-full":
      buttonStyles = styles.btn1Full;
      break;
    case "secondary":
      buttonStyles = styles.btn2;
      break;
    case "secondary-full":
      buttonStyles = styles.btn2Full;
      break;
    case "tertiary":
      buttonStyles = styles.btn3;
      break;
    case "tertiary-full":
      buttonStyles = styles.btn3Full;
      break;
    default:
      buttonStyles = styles.btn1;
  }
  return (
    <button className={buttonStyles}>
      {icon && <Image src={icon} alt="icon" />}
      <span>{label}</span>
    </button>
  );
}
