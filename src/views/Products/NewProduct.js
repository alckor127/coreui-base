import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupAppend,
  CInputGroupText,
  CInvalidFeedback,
  CInputCheckbox,
  CButton,
  CSelect,
  CTooltip,
  CCardFooter,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { priceFormat, quillConfig } from "utils";
import ReactQuill from "react-quill";

const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup
    .string()
    .test("description", "${path} is a required field", (value) => value !== "<p><br></p>")
    .required(),
  price: yup.number().required(),
  compareAtPrice: yup.number().required(),
  unitCost: yup.number().required(),
  stock: yup.number(),
});

const NewCustomer = () => {
  const { register, handleSubmit, watch, errors, control, setValue, getValues } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      price: 0.0,
      compareAtPrice: 0.0,
      unitCost: 0.0,
      margin: "-",
      profit: "-",
    },
  });

  const { price, unitCost } = watch();

  const onSubmit = (data) => console.log("data", data);

  useEffect(() => {
    const margin = Math.round((1 - unitCost / price) * 100);
    const profit = priceFormat(price - unitCost);

    setValue("margin", `${isNaN(margin) ? 0 : margin}%`);
    setValue("profit", `S/. ${profit}`);
  }, [price, unitCost, setValue]);

  return (
    <CForm onSubmit={handleSubmit(onSubmit)}>
      <CRow>
        <CCol xs="12" md="8">
          <CCard>
            <CCardHeader>
              <strong>Producto</strong>
            </CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel>Nombre</CLabel>
                <CInput
                  name="name"
                  placeholder="Camisa de manga corta"
                  invalid={errors.name ? true : false}
                  innerRef={register}
                />
                <CInvalidFeedback>{errors.name?.message}</CInvalidFeedback>
              </CFormGroup>
              <CFormGroup>
                <CLabel>Descripción</CLabel>
                <Controller
                  name="description"
                  control={control}
                  render={({ onChange }) => (
                    <ReactQuill
                      className={errors.description && "is-invalid"}
                      theme="snow"
                      onChange={onChange}
                      modules={quillConfig.modules}
                      formats={quillConfig.formats}
                    />
                  )}
                />
                <CInvalidFeedback>{errors.description?.message}</CInvalidFeedback>
              </CFormGroup>
            </CCardBody>
          </CCard>

          <CCard>
            <CCardHeader>
              <strong>Precios</strong>
            </CCardHeader>
            <CCardBody>
              <CFormGroup row>
                <CCol md="6">
                  <CLabel>Precio</CLabel>
                  <CInputGroup className={errors.price ? "is-invalid" : null}>
                    <CInputGroupPrepend>
                      <CInputGroupText>S/.</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="number"
                      name="price"
                      placeholder="0.00"
                      invalid={errors.price ? true : false}
                      innerRef={register}
                    />
                  </CInputGroup>
                  <CInvalidFeedback>{errors.price?.message}</CInvalidFeedback>
                </CCol>
                <CCol md="6">
                  <CLabel>Precio de comparación</CLabel>
                  <CInputGroup className={errors.compareAtPrice ? "is-invalid" : null}>
                    <CInputGroupPrepend>
                      <CInputGroupText>S/.</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="number"
                      name="compareAtPrice"
                      placeholder="0.00"
                      invalid={errors.compareAtPrice ? true : false}
                      innerRef={register}
                    />
                    <CInputGroupAppend>
                      <CInputGroupText>
                        <CTooltip
                          content="Para mostrar un precio rebajado, mueve el precio original del producto al precio de comparación. Introduce un valor menor para el precio."
                          placement="bottom"
                        >
                          <CIcon name="cil-info" />
                        </CTooltip>
                      </CInputGroupText>
                    </CInputGroupAppend>
                  </CInputGroup>
                  <CInvalidFeedback>{errors.compareAtPrice?.message}</CInvalidFeedback>
                </CCol>
              </CFormGroup>
              <hr />
              <CFormGroup row>
                <CCol md="6">
                  <CLabel>Costo por artículo</CLabel>
                  <CInputGroup className={errors.unitCost ? "is-invalid" : null}>
                    <CInputGroupPrepend>
                      <CInputGroupText>S/.</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="number"
                      name="unitCost"
                      placeholder="0.00"
                      invalid={errors.unitCost ? true : false}
                      innerRef={register}
                    />
                  </CInputGroup>
                  <div className="help-block">
                    <small>Los clientes no verán esta información.</small>
                  </div>
                  <CInvalidFeedback>{errors.unitCost?.message}</CInvalidFeedback>
                </CCol>
                <CCol md="3">
                  <CLabel>Margen</CLabel>
                  <CInput name="margin" innerRef={register} disabled />
                </CCol>
                <CCol md="3">
                  <CLabel>Ganancia</CLabel>
                  <CInput name="profit" innerRef={register} disabled />
                </CCol>
              </CFormGroup>
              <CFormGroup variant="custom-checkbox">
                <CInputCheckbox custom id="Taxable" name="taxable" innerRef={register} />
                <CLabel variant="custom-checkbox" htmlFor="Taxable">
                  Cobrar impuesto sobre la venta de este producto
                </CLabel>
              </CFormGroup>
            </CCardBody>
          </CCard>

          <CCard>
            <CCardHeader>
              <strong>Estado del producto</strong>
            </CCardHeader>
            <CCardBody>
              <CSelect>
                <option>Borrador</option>
                <option>Público</option>
              </CSelect>
            </CCardBody>
            <CCardFooter>
              <CButton color="primary" type="submit">Enviar</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" md="4">
          <CCard>
            <CCardHeader>
              <strong>Errores de validación</strong>
            </CCardHeader>
            <CCardBody>
              <pre>{JSON.stringify(errors, null, 2)}</pre>
            </CCardBody>
          </CCard>
          <CCard>
            <CCardHeader>
              <strong>Datos validos</strong>
            </CCardHeader>
            <CCardBody>
              <pre>{JSON.stringify(getValues(), null, 2)}</pre>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CForm>
  );
};

export default NewCustomer;
