/* eslint-disable react/prop-types */
import  { useRef, useEffect } from 'react';
import './pop.css';

export default function Pop({ isVisible, onClose, children }) {
    const popupRef = useRef(null);

    useEffect(() => {
        let timer;
        if (isVisible) {
            timer = setTimeout(() => {
                onClose();
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [isVisible, onClose]);

    const handleClose = (e) => {
        if (popupRef.current && !popupRef.current.contains(e.target)) {
            onClose();
        }
    };

    if (!isVisible) return null;

    return (
        <div className="popup-overlay" onClick={handleClose}>
            <div className="popup-content" ref={popupRef}>
                {children}
            </div>
        </div>
    );
}
