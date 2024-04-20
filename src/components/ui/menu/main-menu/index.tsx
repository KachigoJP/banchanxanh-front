import React from "react";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";

// Source
import { MenuProps } from "@utils/interface";
import { HeaderNavigationArea, Navbar, Navitem } from "./style";

const MainMenu: React.FC<MenuProps> = (props) => {
    const { t } = useTranslation();
    const menuarr = props.menu;
    return (
        <HeaderNavigationArea>
            <Navbar className="main-menu">
                {menuarr.map((menu) => {
                    const hasSubmenu = menu.isSubmenu ? true : false;
                    const submenu = menu.submenu;
                    return (
                        <Navitem
                            key={`menu-${menu.id}`}
                            className={`${hasSubmenu ? "has-submenu" : ""}`}
                        >
                            <Link activeClassName="active" to={menu.link}>
                                {t(menu.text)}
                            </Link>
                            {submenu && (
                                <ul className="submenu-nav">
                                    {submenu.map((submenu, i) => {
                                        return (
                                            <Navitem key={`submenu${i}`}>
                                                <Link to={submenu.link}>
                                                    {t(submenu.text)}
                                                </Link>
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

export default MainMenu;
