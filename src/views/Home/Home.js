import React from "react";
import { CCol, CRow, CCard, CCardBody, CCardHeader } from "@coreui/react";

const Home = () => {
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader className="d-flex align-items-center justify-content-between">
            <strong>Empty</strong>
          </CCardHeader>
          <CCardBody>Empty example</CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Home;
