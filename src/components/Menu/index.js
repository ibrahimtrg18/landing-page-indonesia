import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuList, MenuItem } from "./styles";

import Smile from "../../assets/icons/smile.svg";
import PenTool from "../../assets/icons/pen-tool.svg";
import PhoneCall from "../../assets/icons/phone-call.svg";

const Menu = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <MenuList>
      <Link href="/about" passHref>
        <MenuItem isActive={pathname === "/about"}>
          <Smile />
          About Us
        </MenuItem>
      </Link>
      <Link href="/visionmission" passHref>
        <MenuItem isActive={pathname === "/visionmission"}>
          <PenTool />
          Vision Mission
        </MenuItem>
      </Link>
      <Link href="/contact" passHref>
        <MenuItem isActive={pathname === "/contact"}>
          <PhoneCall />
          Contact
        </MenuItem>
      </Link>
    </MenuList>
  );
};

export default Menu;
