import React from 'react'
import PropTypes from 'prop-types'
import { CModal, CModalHeader, CModalBody, CModalFooter, CButton } from '@coreui/react'
import { confirmable, createConfirmation } from 'react-confirm'

const propTypes = {
  proceedLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  title: PropTypes.string,
  confirmation: PropTypes.string,
  show: PropTypes.bool,
  proceed: PropTypes.func, // called when ok button is clicked.
  cancel: PropTypes.func, // called when cancel button is clicked.
  dismiss: PropTypes.func, // called when backdrop is clicked or escaped.
  enableEscape: PropTypes.bool
}

const defaultProps = {
  title: 'Confirm'
}

const Confirmation = (props) => {
  const { proceedLabel, cancelLabel, title, confirmation, show, proceed, dismiss, cancel, enableEscape = true } = props

  return (
    <CModal
      show={show}
      onClose={dismiss}
      backdrop={enableEscape ? true : 'static'}
      closeOnBackdrop={enableEscape}
      centered
    >
      <CModalHeader closeButton>{title}</CModalHeader>
      <CModalBody>{confirmation}</CModalBody>
      <CModalFooter>
        <CButton color="primary" onClick={proceed}>
          {proceedLabel}
        </CButton>{' '}
        <CButton color="secondary" onClick={cancel}>
          {cancelLabel}
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

Confirmation.propTypes = propTypes
Confirmation.defaultProps = defaultProps

export function confirm(title, confirmation, proceedLabel = 'OK', cancelLabel = 'Cancel', options = {}) {
  return createConfirmation(confirmable(Confirmation))({
    title,
    confirmation,
    proceedLabel,
    cancelLabel,
    ...options
  })
}
