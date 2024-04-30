import { useState } from 'react';
import './Modal.css';

export default function Modal() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="Modal">
            <header className="Modal-header">
                <h1>React Simple Modal</h1>
                <button onClick={toggleModal}>Open Modal</button>
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={toggleModal}>
                                &times;
                            </span>
                            <p>Modal Empty</p>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}
