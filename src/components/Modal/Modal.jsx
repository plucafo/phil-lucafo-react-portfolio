import styles from './Modal.module.css'

export const ThankYouModal = ({ isOpen, onClose, name }) => {
    if (!isOpen) return null;
  
    return (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h2>Thank you for reaching out {name}!</h2>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
