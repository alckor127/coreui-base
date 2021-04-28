import { CCol, CFormGroup, CLabel, CSelect } from "@coreui/react";

const RequiredAttr = ({ nestIndex, register }) => {
  return (
    <CFormGroup row>
      <CCol md={3}>
        <CLabel>Required</CLabel>
      </CCol>
      <CCol md={9}>
        <CSelect name={`fields[${nestIndex}].attr[required]`} innerRef={register()}>
          <option value="true">Si</option>
          <option value="false">No</option>
        </CSelect>
      </CCol>
    </CFormGroup>
  )
}

export { RequiredAttr }