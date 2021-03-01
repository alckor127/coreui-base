import ReactDOM from 'react-dom'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'
import { CToast, CToastHeader, CToastBody } from '@coreui/react'

const createToast = (Component, unmountDelay = 1000, mountingNode) => {
  return (props) => {
    const wrapper = (mountingNode || document.body).appendChild(document.createElement('div'))

    const promise = new Promise((resolve, reject) => {
      try {
        ReactDOM.render(<Component reject={reject} resolve={resolve} dispose={dispose} {...props} />, wrapper)

        document.getElementsByClassName('toaster')[0].appendChild(wrapper)
      } catch (e) {
        console.error(e)
        throw e
      }
    })

    function dispose() {
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(wrapper)
        setTimeout(() => {
          if (document.body.contains(wrapper)) {
            document.body.removeChild(wrapper)
          }
        })
      }, unmountDelay)
    }

    return promise.then(
      (result) => {
        dispose()
        return result
      },
      (result) => {
        dispose()
        return Promise.reject(result)
      }
    )
  }
}

const Toastify = ({ color, show, autohide, fade, closeButton, title, message }) => {
  return (
    <CToast className={classNames({ [`toast-${color}`]: color })} show={show} autohide={autohide} fade={fade}>
      <CToastHeader closeButton={closeButton}>{title}</CToastHeader>
      <CToastBody>{message}</CToastBody>
    </CToast>
  )
}

Toastify.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  show: PropTypes.bool,
  autohide: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  fade: PropTypes.bool,
  closeButton: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  message: PropTypes.string.isRequired
}

Toastify.defaultProps = {
  show: true,
  autohide: 10000, // false
  fade: true,
  closeButton: true
}

const toast = (title, message, options = {}) => {
  return createToast(Toastify)({
    title,
    message,
    ...options
  })
}

export { toast }
