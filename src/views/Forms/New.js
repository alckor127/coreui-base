import React from "react";
import { CCol, CRow, CCard, CCardBody, CCardHeader, CForm, CFormGroup, CLabel, CInput, CSelect, CButton } from "@coreui/react";
import { useForm, useFieldArray } from "react-hook-form"
import { formType as options } from "utils/form"

const New = () => {
  const {handleSubmit, register, control} = useForm({
    defaultValues: {
      form: [
        {
          label: "",
          type: ""
        }
      ]
    }
  })

  return (
    <CRow>
      <CCol md={7}>
        <CCard>
          <CCardHeader className="d-flex align-items-center justify-content-between">
            <strong>Formulario</strong>
            <div className="card-header-actions">
              <CButton color="primary" variant="outline" onClick={() => console.log("test")}>Agregar campo</CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CFormGroup row>
                <CCol xs={12} className="d-flex align-items-center justify-content-between">
                  <CLabel>Campo</CLabel>
                  <CButton color="danger" variant="ghost" size="sm" onClick={() => alert()}>X</CButton>
                </CCol>
                <CCol md={6}>
                  <CFormGroup>
                    <CLabel>Etiqueta</CLabel>
                    <CInput name="label" placeholder="Etiqueta" innerRef={register()} />
                  </CFormGroup>
                </CCol>
                <CCol md={6}>
                  <CFormGroup>
                    <CLabel>Tipo</CLabel>
                    <CSelect custom name="label" innerRef={register()}>
                      <option>- Seleccione -</option>
                      {options.map((item, idx) => (
                        <option key={idx} value={item.value}>{item.label}</option>
                      ))}
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default New;
