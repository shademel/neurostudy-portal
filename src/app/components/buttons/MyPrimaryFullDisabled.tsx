'use client';

import React from "react";
import Search from "../../images/Search.svg";
import ActionButton, { ButtonStyle } from "./ActionButton";

export default function myPrimaryFullDisabled() {
  return (
    <ActionButton 
    label="Search Disabled" 
    icon={Search}  
    disabled={true}
    style={ButtonStyle.PrimaryFull}
    />
  );
}
