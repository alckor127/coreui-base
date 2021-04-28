import { CCol, CFormGroup, CLabel, CInput } from "@coreui/react";

const RowsAttr = ({ nestIndex, register }) => {
  return (
    <CFormGroup row>
      <CCol md={3}>
        <CLabel>Rows</CLabel>
      </CCol>
      <CCol md={9}>
        <CInput type="number" name={`fields[${nestIndex}].attr[rows]`} innerRef={register()} />
      </CCol>
    </CFormGroup>
  )
}

export { RowsAttr }