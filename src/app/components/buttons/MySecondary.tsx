import React from "react";
import Search from "../../images/SearchOrg.svg";

import ActionButton from "./ActionButton";

export default function mySecondary() {
  return (
    <ActionButton label="Search" icon={Search} style="secondary" />
  );
}
