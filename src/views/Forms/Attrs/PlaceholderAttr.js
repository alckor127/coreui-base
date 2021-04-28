import {CCol, CFormGroup, CLabel, CInput } from "@coreui/react";

const PlaceholderAttr = ({ nestIndex, register }) => {
  return (
    <CFormGroup row>
      <CCol md={3}>
        <CLabel>Placeholder</CLabel>
      </CCol>
      <CCol md={9}>
        <CInput name={`fields[${nestIndex}].attr[placeholder]`} placeholder="Placeholder" innerRef={register()} />
      </CCol>     
    </CFormGroup>
  )
}

export { PlaceholderAttr }