'use client';

import { useState, ReactNode } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

type ModalWindowProps = {
  title: string;
  children: (props: { closeModal: () => void }) => ReactNode;
  trigger: ReactNode;
};

export const ModalWindow = ({ title, children, trigger }: ModalWindowProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div onClick={openModal}>{trigger}</div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content relative">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200 transition"
              aria-label="Close"
            >
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            </button>
            {children({ closeModal })}
          </div>
        </div>
      )}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          width: 90%;
          max-width: 500px;
        }
      `}</style>
    </>
  );
};
