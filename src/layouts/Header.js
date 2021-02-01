import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CHeader, CToggler, CHeaderBrand, CHeaderNav, CSubheader, CBreadcrumbRouter, CLink } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { HeaderDropdown } from "layouts";
// routes config
import { routes } from "routes";

import { AppAction } from "redux/actions";

const Header = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.AppReducer.sidebarShow);

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow) ? false : "responsive";

    dispatch(AppAction.sidebarShow(val));
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow) ? true : "responsive";

    dispatch(AppAction.sidebarShow(val));
  };

  return (
    <CHeader withSubheader>
      <CToggler inHeader className="ml-md-3 d-lg-none" onClick={toggleSidebarMobile} />
      <CToggler inHeader className="ml-3 d-md-down-none" onClick={toggleSidebar} />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height={35} alt="Logo" />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto"></CHeaderNav>

      <CHeaderNav className="px-3">
        <HeaderDropdown />
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter className="border-0 c-subheader-nav m-0 px-0 px-md-3" routes={routes} />
        <div className="d-md-down-none mfe-2 c-subheader-nav">
          <CLink className="c-subheader-nav-link" href="/settings">
            <CIcon name="cil-settings" alt="Settings" />
            &nbsp;Configuración
          </CLink>
        </div>
      </CSubheader>
    </CHeader>
  );
};

export default Header;
