import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";

function Modal({ isOpen, onClose, children, title }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 max-w-xl mx-auto bg-white backdrop-blur-sm r z-50 overflow-hidden">
      <div className="p-4 flex gap-3 justify-center place-items-center fixed top-0 w-full bg-white z-50 shadow-sm">
        <div className="flex-none w-12 cursor-pointer" onClick={onClose}>
          <ChevronLeftIcon className="h-6 w-6 " />
        </div>
        <div className="grow text-center">
          <h1 className="font-semibold ">{title}</h1>
        </div>
        <div className="flex-none w-12"></div>
      </div>
      <div className="px-4 overflow-auto mt-14 h-full pb-14">{children}</div>
    </div>
  );
}

export default Modal;
