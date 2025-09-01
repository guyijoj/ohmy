import React from "react";

interface ModalProps {
  isActive: boolean;
  children: React.ReactNode;
}

const Modal = ({ isActive, children }: ModalProps) => {
  return (
    <div className="absolute p-4 bg-blue-400 -translate-1/2 top-1/2 left-1/2 w-full">
      <div className="">
        <button className="underline ">Go back</button>
      </div>
      {children}
    </div>
  );
};

export default Modal;
