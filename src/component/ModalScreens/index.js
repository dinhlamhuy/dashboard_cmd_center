import React, {  useEffect } from 'react'
import Modal from 'react-modal'
import './index.css';
// type ModalProps = {
//   isOpen: boolean
//   onClose: () => void
//   children: ReactNode
// }

const ModalScreens = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='Modal'
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
          width: '50%',
          minWidth: '40%',
          maxWidth: '80%',
          maxHeight: '60%',
          minHeight: '20%',
          margin: 'auto',
          // display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',
          border: '10px solid teal',
          borderRadius: '12px',
           overflow:"hidden",
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
          padding: '0px',
          backgroundColor: '#000000'
        }
      }}
    >{children}</Modal>
  )
}

export default ModalScreens
