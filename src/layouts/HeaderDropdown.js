import React from "react";
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CImg } from "@coreui/react";
import CIcon from "@coreui/icons-react";

const TheHeaderDropdown = () => {
  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg src={"/avatars/7.jpg"} className="c-avatar-img" alt="admin@zima.pe" />
        </div>
        <div className="c-username">Francisco Rios Vega</div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Cuenta</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />
          Gestionar cuenta
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          Configuración
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-account-logout" className="mfe-2" />
          Cerrar sesión
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem>
          <CIcon name="cil-info" className="mfe-2" />
          Centro de ayuda de Zimashop
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-comment-bubble" className="mfe-2" />
          Foros de la comunidad
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-briefcase" className="mfe-2" />
          Contrata a un experto de Zimashop
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-terminal" className="mfe-2" />
          Atajos de teclado
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
