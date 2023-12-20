'use client';

import React from "react";
import CircleRight from "../../images/CircleRightOrg.svg";
import ActionButton, { ButtonStyle } from "./ActionButton";

export default function myTertiaryFull() {
  return (
    <ActionButton 
      label="Learn more" 
      icon={CircleRight} 
      style= {ButtonStyle.TertiaryFull} disabled={false}
      iconPosition="right"
      onClick={()=>console.log('clicked TertiaryFull button')}/>
  );
}
