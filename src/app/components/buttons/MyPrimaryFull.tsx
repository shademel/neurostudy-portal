'use client';

import React from "react";
import Search from "../../images/Search.svg";
import ActionButton, { ButtonStyle } from "./ActionButton";

export default function myPrimaryFull() {
  return (
    <ActionButton 
    label="Search" 
    icon={Search}  
    disabled={false}
    style={ButtonStyle.PrimaryFull}
    onClick={()=>console.log('clicked PrimaryFull button')}/>
  );
}
