import React from "react";

export const Modal = ({ children, close, isOpen }) => {
  const closeModal = (e) => {
    if (e.key === "Escape") {
      close;
    }
  };
  React.useEffect(() => {
    window.addEventListener("keypress", closeModal);

    return () => {
      window.removeEventListener("keypress", closeModal);
    };
  }, []);

  if (!isOpen) {
    return null;
  }
  return (
    <div
      onClick={close}
      className="bg-[#7f7d7d] absolute inset-0 flex items-center justify-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white py-[24px] px-[40px]"
      >
        {children}
        <button onClick={close} className="absolute top-4 right-4">
          X
        </button>
      </div>
    </div>
  );
};
