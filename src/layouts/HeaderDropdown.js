import React from "react";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { confirm } from "components/Notify";
import { storage } from "utils";

const TheHeaderDropdown = () => {
  const logout = () => {
    storage.remove("token");
    document.location.replace(`${process.env.PUBLIC_URL}/login`);
  };

  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={"/avatars/7.jpg"}
            className="c-avatar-img"
            alt="admin@zima.pe"
          />
        </div>
        <div className="c-username">Francisco Rios Vega</div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Cuenta</strong>
        </CDropdownItem>
        <CDropdownItem
          onClick={() =>
            confirm(
              "Cerrar sesión",
              "¿Deseas cerrar sesión de tu cuenta?",
              "Si",
              "No"
            )
              .then(() => logout())
              .catch(() => console.log("cancel"))
          }
        >
          <CIcon name="cil-account-logout" className="mfe-2" />
          Cerrar sesión
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
