import { useForm, useFieldArray } from "react-hook-form";
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
  CInputGroupAppend,
  CInvalidFeedback,
  CButton,
} from "@coreui/react";

const FieldArray = () => {
  const {
    handleSubmit,
    register,
    control,
    errors,
    getValues,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        artist: yup.string().required(),
      })
    ),
    defaultValues: {
      artist: "",
      songs: [
        { title: "" }
      ]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "songs",
    keyName: "key"
  });

  const onSubmit = (data) => console.log("data", data);

  return (
    <CForm onSubmit={handleSubmit(onSubmit)}>
      <CRow>
        <CCol xs="12" md="8">
          <CCard>
            <CCardHeader className="d-flex align-items-center justify-content-between">
              <strong>Field Array</strong>
              <div className="card-header-actions">
                <CButton color="primary" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </CButton>
              </div>
            </CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel>Artista</CLabel>
                <CInput
                  name="artist"
                  placeholder="J Balvín"
                  invalid={errors.artist ? true : false}
                  innerRef={register()}
                />
                <CInvalidFeedback>{errors.artist?.message}</CInvalidFeedback>
              </CFormGroup>
              {fields.map((field, idx) => (
                <CFormGroup key={field.key}>
                  <CLabel>Canción {idx + 1}</CLabel>
                  <CInputGroup>
                    <CInput
                      name={`songs[${idx}].title`}
                      defaultValue={field.title}
                      placeholder="Rojo"
                      innerRef={register()}
                    />
                    <CInputGroupAppend>
                      <CButton block color="danger" onClick={() => remove(idx)}>
                        Eliminar
                      </CButton>
                    </CInputGroupAppend>
                  </CInputGroup>
                </CFormGroup>
              ))}
              <CButton color="info" onClick={() => append({ title: "" })}>
                Agregar canción
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" md="4">
          <CCard>
            <CCardHeader className="d-flex align-items-center justify-content-between">
              <strong>Datos</strong>
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

export default FieldArray;
