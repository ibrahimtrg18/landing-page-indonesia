import React from "react";
import { MenuList, MenuItem } from "./styles";

import Smile from "../../assets/icons/smile.svg";
import PenTool from "../../assets/icons/pen-tool.svg";
import PhoneCall from "../../assets/icons/phone-call.svg";

const Menu = () => {
  return (
    <MenuList>
      <MenuItem isActive>
        <Smile />
        About Us
      </MenuItem>
      <MenuItem>
        <PenTool />
        Vision Mission
      </MenuItem>
      <MenuItem>
        <PhoneCall />
        Contact
      </MenuItem>
    </MenuList>
  );
};

export default Menu;
