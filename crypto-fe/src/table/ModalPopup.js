import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalPopup = ({
  title,
  body,
  handleConfirm,
  btnText,
  dataTestid,
}) => {
  const [show, setShow] = useState(true);

  const onModalHide = () => {
    setShow(false);
    handleConfirm();
  };

  const onModalConfirm = () => {
    setShow(false);
    handleConfirm();
  };

  return (
    <>
      <Modal show={show} style={{ marginTop: '8rem' }} onHide={onModalHide} backdrop="static" keyboard={false}>
        <Modal.Body>
          <div className="d-flex customHeader align-items-center">
            <div className="ml-2">
              <h2>
                {title}
              </h2>
            </div>
          </div>
          <div className="ml-5">
            {body}
          </div>

        </Modal.Body>
        <Modal.Footer className="d-flex">
          <Button variant="success" className="medium-btn" style={{ padding: '0.5rem 2rem' }} onClick={onModalConfirm} data-testid={dataTestid}>
            {btnText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ModalPopup.propTypes = {
  title: PropTypes.string,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)]),
  handleConfirm: PropTypes.func.isRequired,
  btnText: PropTypes.string,
  dataTestid: PropTypes.string,
};

ModalPopup.defaultProps = {
  title: 'Successfull',
  body: 'Action Successfull',
  btnText: 'Ok',
  dataTestid: '',
};

export default ModalPopup;
