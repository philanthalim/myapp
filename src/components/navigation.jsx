import React from "react";
import { NavbarStyle } from "../styles";
import { Link } from "react-router-dom";

export function Navbar() {
  const menuList = [
    {
      title: "Home",
    },
    {
      title: "Products",
    },
    {
      title: "About",
    },
    {
      title: "Claims",
    },
  ];

  return (
    <nav className={NavbarStyle.navStyle}>
      <div className={NavbarStyle["nav-wrapper"]}>
        <div className={NavbarStyle.navContainer}>
          <div className={NavbarStyle["nav-logo"]}>
            <Link href="/">
              <a>
                <img
                  width={80}
                  height={80}
                  src="https://paperform.co/website/logo-v3/Paperform_Master_Black.png"
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          <ul className={NavbarStyle["menus"]}>
            {menuList.map((item, index) => {
              return (
                <li className={NavbarStyle["menu-items"]} key={index}>
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
