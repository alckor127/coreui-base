import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
// sidebar navigation config
import { navigation } from "routes";

import { AppAction } from "redux/actions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.AppReducer.sidebarShow);

  return (
    <CSidebar
      show={sidebarShow}
      onShowChange={(val) => dispatch(AppAction.sidebarShow(val))}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CImg
          className="c-sidebar-brand-minimized"
          src="/iso.png"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(Sidebar);
