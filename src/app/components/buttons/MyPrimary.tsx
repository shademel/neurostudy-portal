import React from "react";
import Search from "../../images/Search.svg";
import ActionButton from "./ActionButton";
import { ButtonStyle } from "./ActionButton"

export default function myPrimary() {
  return (
    <ActionButton label="Search" icon={Search} style={ButtonStyle.PrimaryFull}  />
  );
}
