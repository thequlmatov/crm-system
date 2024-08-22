import React, { useState } from "react";
import {
  Container,
  ExitIcon,
  Logo,
  LogOut,
  Menu,
  MenuItem,
  Profile,
  Submenu,
  Wrapper,
} from "./style";
import noImg from "../../assets/images/noUser.webp";
import MenuArrow from "../../assets/icons/strelka.svg?react";

import { sidebar } from "../../mock/sidebar";

const Sidebar = () => {
  const [open, setOpen] = useState([]);

  const onOpen = (id) => {
    if (open.includes(id)) {
      let res = open.filter((val) => val != id);
      setOpen(res);
    } else setOpen([...open, id]);
  };

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
        {sidebar.map((item) => {
          const { icon: Icon } = item;
          return (
            <div key={item.id}>
              <MenuItem onClick={() => onOpen(item.id)}>
                <MenuItem.Title open={open.includes(item.id)} bgh="#F8FAFC">
                  <Icon className="icons" />
                  {item.title}
                  {item?.child && (
                    <div className="arrow" style={{ marginLeft: "auto" }}>
                      <MenuArrow />
                    </div>
                  )}
                </MenuItem.Title>
                {item?.child && (
                  <Wrapper open={open.includes(item.id)}>
                    {item.child.map((child) => {
                      return (
                        <Submenu bgh="#F8FAFC" key={child.id}>
                          {child.title}
                        </Submenu>
                      );
                    })}
                  </Wrapper>
                )}
              </MenuItem>
            </div>
          );
        })}
        <LogOut>
          <ExitIcon />
          Chiqish{" "}
        </LogOut>
      </Menu>
    </Container>
  );
};

export default Sidebar;
