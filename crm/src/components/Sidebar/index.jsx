import React from "react";
import { Container, Logo, LogOut, Menu, MenuItem, Profile } from "./style";
import noImg from "../../assets/images/noUser.webp";

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
        <MenuItem bgh="#F8FAFC">
          <MenuItem.Title>Buyurtma</MenuItem.Title>
        </MenuItem>
        <MenuItem bgh="#F8FAFC">
          <MenuItem.Title>Moliya</MenuItem.Title>
        </MenuItem>
        <MenuItem bgh="#F8FAFC">
          <MenuItem.Title>Talaba</MenuItem.Title>
        </MenuItem>
        <MenuItem bgh="#F8FAFC">
          <MenuItem.Title>Guruhlar</MenuItem.Title>
        </MenuItem>
        <MenuItem bgh="#F8FAFC">
          <MenuItem.Title>Kurslar</MenuItem.Title>
        </MenuItem>
        <MenuItem bgh="#F8FAFC">
          <MenuItem.Title>HR</MenuItem.Title>
        </MenuItem>
        <MenuItem bgh="#F8FAFC">
          <MenuItem.Title>Sozlamalar</MenuItem.Title>
        </MenuItem>
        <LogOut>Chiqish</LogOut>
      </Menu>
    </Container>
  );
};

export default Sidebar;
