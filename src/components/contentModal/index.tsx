import React from 'react';
import ReactModal from 'react-modal';
import './modal.css';
import { ILabel } from '../../common/constants';

interface Props {
  content: ILabel;
  onClose: () => void;  
}

const ContentModal = (props: Props) => {
  const { content, onClose } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <ReactModal
      isOpen={true}
      ariaHideApp={false}
      overlayClassName="modal-overlay"
      className="modal"
      onRequestClose={handleClose}
    >
      <>
        <div className="header">
         <h1>{content.text} </h1>
          <div className="modal-close" onClick={() => handleClose()}></div>
        </div>
        <ul>
          {content.content!.map(c => (
            <li>
              <a href={c.url} target="_blank" rel="noopener noreferrer">
                {c.label}
              </a>
            </li>
          ))}
        </ul>
        {/* <iframe name="content" title="content"/> */}
      </>
    </ReactModal>  
  )
}

export default ContentModal;

