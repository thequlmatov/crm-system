import React from "react";
import { Container, Logo, LogOut, Menu, MenuItem, Profile } from "./style";
import noImg from "../../assets/images/noUser.webp";

const menuItems = [
  "Buyurtma",
  "Moliya",
  "Talaba",
  "Guruhlar",
  "Kurslar",
  "HR",
  "Sozlamalar",
];

const Sidebar = () => {
  return (
    <Container>
      <Logo> Webbrain CRM </Logo>
      <Profile>
        <Profile.Image src={noImg} />
        <div>
          <Profile.Name cl="n#253E5F">Sardorbek Muhtorov</Profile.Name>
          <Profile.Email cl="#BBC3CD">sardor.edu@gmail.com</Profile.Email>
        </div>
      </Profile>
      <Menu>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            bgh="#F8FAFC"
            isLast={index === menuItems.length - 1}
          >
            <MenuItem.Title>{item}</MenuItem.Title>
          </MenuItem>
        ))}
        <LogOut>Chiqish</LogOut>
      </Menu>
    </Container>
  );
};

export default Sidebar;
