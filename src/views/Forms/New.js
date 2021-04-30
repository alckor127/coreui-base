import React from "react";
import { useForm, useFieldArray } from "react-hook-form"
import { CCol, CRow, CCard, CCardBody, CCardHeader, CForm, CFormGroup, CLabel, CInput, CSelect, CButton } from "@coreui/react";
import CIcon from "@coreui/icons-react"
import { formType as options, camelCase } from "utils"
import { PlaceholderAttr, RequiredAttr, RowsAttr } from "./Attrs"

const RenderFieldAttr = ({nestIndex, type, register }) => {
  switch (type) {
    case "TextareaType":
      return (
        <React.Fragment>
          <PlaceholderAttr nestIndex={nestIndex} {...{ register }} />
          <RequiredAttr nestIndex={nestIndex} {...{ register }} />
          <RowsAttr nestIndex={nestIndex} {...{ register }} />
        </React.Fragment>
      )
    case "ColorType":
    case "CheckboxType":
    case "FileType":
      return (
        <React.Fragment>
          <RequiredAttr nestIndex={nestIndex} {...{ register }} />
        </React.Fragment>
      )
    case "ButtonType":
    case "ResetType":
    case "SubmitType":
      return null
    default:
      return (
        <React.Fragment>
          <PlaceholderAttr nestIndex={nestIndex} {...{ register }} />
          <RequiredAttr nestIndex={nestIndex} {...{ register }} />
        </React.Fragment>
      )
  }
}

const New = () => {
  const {handleSubmit, register, control, watch, setValue, getValues} = useForm({
    defaultValues: {
      id: "",
      name: "",
      fields: [
        {
          label: "",
          name: "",
          type: ""
        }
      ]
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
    keyName: "key"
  })

  const onSubmit = (data) => console.log(data)

  return (
    <CRow>
      <CCol md={6}>
        <CForm onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
          <CCard>
            <CCardHeader className="d-flex align-items-center justify-content-between">
              <strong>Formulario</strong>
              <div className="card-header-actions">
                <CButton color="dark" variant="outline" onClick={() => append({ label: "", type: ""})}>Agregar campo</CButton>{" "}
                <CButton type="submit" color="primary">Guardar</CButton>
              </div>
            </CCardHeader>
            <CCardBody>
              <CFormGroup row>
                <CCol md={3}>
                  <CLabel>Nombre</CLabel>
                </CCol>
                <CCol md={9}>
                  <CInput name="name" placeholder="Nombre único del formulario" innerRef={register()} />
                </CCol>                
              </CFormGroup>
            </CCardBody>
          </CCard>
          {fields.map((field, idx) => (
            <CCard key={field.key}>
              <CCardHeader className="d-flex align-items-center justify-content-between">
                <strong>Campo {idx + 1}</strong>
                <div className="card-header-actions">
                  <CButton color="danger" variant="ghost" size="sm" onClick={() => remove(idx)}>
                    <CIcon name="cil-x" />
                  </CButton>
                </div>
              </CCardHeader>
              <CCardBody>
                <CFormGroup row>
                  <CCol md={3}>
                    <CLabel>Etiqueta</CLabel>
                  </CCol>
                  <CCol md={9}>
                    <CInput name={`fields[${idx}].label`} placeholder="Etiqueta" onChange={(e) => {
                      setValue(`fields[${idx}].name`, camelCase(e.target.value))
                    }} innerRef={register()} />
                    <CInput type="hidden" name={`fields[${idx}].name`} innerRef={register()} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md={3}>
                    <CLabel>Tipo</CLabel>
                  </CCol>
                  <CCol md={9}>
                    <CSelect name={`fields[${idx}].type`} custom innerRef={register()}>
                      <option value="">- Seleccione -</option>
                      {options.map((item, idx) => (
                        <option key={idx} value={item.value}>{item.label}</option>
                      ))}
                    </CSelect>
                  </CCol>                
                </CFormGroup>
                <RenderFieldAttr nestIndex={idx} type={watch(`fields[${idx}].type`)} {...{ register, control }} />
              </CCardBody>
            </CCard>
          ))}
        </CForm>
      </CCol>
      <CCol md={6}>
        <CCard>
          <CCardHeader className="d-flex align-items-center justify-content-between">
            <strong>Vista previa</strong>
          </CCardHeader>
          <CCardBody>
            <pre>{JSON.stringify(getValues(), null, 2)}</pre>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default New;

