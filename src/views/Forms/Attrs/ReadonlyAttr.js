import { CCol, CFormGroup, CLabel, CSelect } from "@coreui/react";

const ReadonlyAttr = ({ nestIndex, register }) => {
  return (
    <CFormGroup row>
      <CCol md={3}>
        <CLabel>Readonly</CLabel>
      </CCol>
      <CCol md={9}>
        <CSelect name={`fields[${nestIndex}].attr[readonly]`} defaultValue="false" innerRef={register()}>
          <option value="true">Si</option>
          <option value="false">No</option>
        </CSelect>
      </CCol>
    </CFormGroup>
  )
}

export { ReadonlyAttr }