import React from "react";
import { CCol, CRow, CCard, CCardBody, CCardHeader, CButton } from "@coreui/react";

const Inventory = () => {
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            <strong>Inventario</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs="12" md="6" className="mx-auto">
                <div className="text-center">
                  <h3>Hacer seguimiento de tu inventario</h3>
                  <p>
                    Cuando activas el seguimiento de inventario en tus productos, puedes ver y ajustar sus recuentos
                    de inventario aquí.
                  </p>
                  <div className="my-5 pt-2 pb-4">
                    <CButton color="primary">Agregar transferencia</CButton>
                  </div>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Inventory;
