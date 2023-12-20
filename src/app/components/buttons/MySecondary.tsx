'use client';

import React from "react";
import Search from "../../images/SearchOrg.svg";
import ActionButton, { ButtonStyle } from "./ActionButton";

export default function mySecondary() {
  return (
    <ActionButton label="Search" icon={Search} style={ButtonStyle.Secondary} disabled={false}
      onClick={()=>console.log('clicked Secondary button')}/>
  );
}
