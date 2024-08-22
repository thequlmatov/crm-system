import styled from "styled-components";
import exit from "../../assets/icons/Chiqish.svg?react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 280px;
  min-width: 280px;
  background-color: white;
  height: 100vh;
  box-shadow: 0px 0px 8px 0px #f5f6f8;
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: rgba(24, 144, 255, 1);
  padding: 16px 24px;
  border-bottom: 1px solid rgba(222, 225, 227, 1);
  cursor: pointer;
  z-index: 999;
`;

// PROFILE
const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 23px 24px 32px 24px;
`;

Profile.Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 16px;
`;

Profile.Name = styled.div`
  width: 168px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: ${({ cl }) => cl};
`;

Profile.Email = styled.div`
  width: 168px;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${({ cl }) => cl};
`;

// MENU
const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const MenuItem = styled.li`
  text-decoration: none;
  color: ${({ cl }) => cl};

  .icons {
    margin-right: 20px;
  }
`;

MenuItem.Title = styled.div`
  font-weight: 500;
  font-style: normal;
  display: flex;
  align-items: center;
  flex: 1;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 12px 24px 12px 24px;
  color: #253e5f;
  &:hover {
    cursor: pointer;
    background-color: ${({ bgh }) => bgh};
    color: #1890ff;
    path {
      fill: rgb(24, 144, 255);
    }
  }
  .arrow {
    transform: ${({ open }) => (open ? "rotate(90deg)" : "rotate(0)")};
  }
`;

const LogOut = styled(Logo)`
  display: flex;
  align-items: center;
  margin-top: auto;
  font-size: 14px;
  width: 100%;
  position: sticky;
  bottom: 0;
  border-top: 1px solid rgba(222, 225, 227, 1);
  border-bottom: 0;
  background-color: white;
`;

const ExitIcon = styled(exit)`
  margin-right: 16px;
  path {
    fill: #1890ff;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  height: ${({ open }) => (open ? "fit-content" : "0px")};
  overflow: hidden;
`;

const Submenu = styled.div`
  display: flex;
  padding: 12px 0 12px 30px;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
    background-color: ${({ bgh }) => bgh};
    color: #1890ff;
  }
`;

export {
  Container,
  Logo,
  Profile,
  Menu,
  MenuItem,
  Wrapper,
  Submenu,
  LogOut,
  ExitIcon,
};
