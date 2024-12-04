import React from 'react';
import { FaTimes } from 'react-icons/fa'; // Import the FaTimes icon from react-icons

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg relative max-w-2xl w-full">
        <button onClick={onClose} className="absolute top-0 right-0 p-2 text-gray-500">
          <FaTimes /> {/* Display the FaTimes icon */}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
