import React from "react";
import { useHistory } from "react-router-dom"
import { CCol, CRow, CCard, CCardBody, CCardHeader, CButton } from "@coreui/react";

const Forms = () => {
  const history = useHistory();

  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader className="d-flex align-items-center justify-content-between">
            <strong>Formularios</strong>
            <div className="card-header-actions">
              <CButton color="primary" variant="outline" onClick={() => history.push("/forms/new")}>Crear formulario</CButton>
            </div>
          </CCardHeader>
          <CCardBody>Empty example</CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Forms;
