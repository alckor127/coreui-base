import React from "react";
import { useHistory } from "react-router-dom";
import { CCol, CRow, CCard, CCardBody, CCardHeader, CButton } from "@coreui/react";

const Products = () => {
  const history = useHistory();

  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            <strong>Productos</strong>
            <div className="card-header-actions">
              <CButton variant="ghost" color="dark" size="sm">
                Importar
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs="12" md="6" className="mx-auto">
                <div className="text-center">
                  <h3>Agregar y gestionar tus productos</h3>
                  <p>
                    Aquí es donde agregarás productos y gestionarás tus precios. También puedes importar y exportar tu
                    inventario de productos.
                  </p>
                  <div className="my-5 pt-2 pb-4">
                    <CButton color="primary" onClick={() => history.push("/products/new")}>
                      Agregar producto
                    </CButton>
                    <CButton variant="ghost" color="dark">
                      Importar productos
                    </CButton>
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

export default Products;
