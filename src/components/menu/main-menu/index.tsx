import Link from "next/link";
import React from "react";
import { HeaderNavigationArea, Navbar, Navitem } from "./style";

const MainMenu = ({ allmenuData }: any) => {
  const menuarr = allmenuData;
  return (
    <HeaderNavigationArea>
      <Navbar className="main-menu">
        {menuarr.map((menu: any) => {
          const hasSubmenu = menu.isSubmenu ? true : false;
          const submenu = menu.submenu;
          return (
            <Navitem
              key={`menu-${menu.id}`}
              className={`${hasSubmenu ? "has-submenu" : ""}`}
            >
              <Link className="active" href={menu.link}>
                {menu.text}
              </Link>
              {submenu && (
                <ul className="submenu-nav">
                  {submenu.map((submenu: any, i: number) => {
                    return (
                      <Navitem key={`submenu${i}`}>
                        <Link href={submenu.link}>{submenu.text}</Link>
                      </Navitem>
                    );
                  })}
                </ul>
              )}
            </Navitem>
          );
        })}
      </Navbar>
    </HeaderNavigationArea>
  );
};

// MainMenu.propTypes = {
//   allmenuData: PropTypes.array,
// };

export default MainMenu;
