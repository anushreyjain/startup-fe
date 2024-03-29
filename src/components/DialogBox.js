import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import useClickOutside from "./ClickOutside";
import IcomoonIcon from "./IcomoonIcon";

export default function DialogBox({
  children,
  zIndex,
  alwaysOpen,
  height,
  width,
  closeModal,
  ...property
}) {
  const dialogRef = useRef(null);
  useClickOutside(dialogRef, () => closeModal());
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "visible");
  }, []);
  return (
    <div
      className={`fixed ${zIndex || "z_inf"} inset-0`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex justify-center h-full items-end md:items-center text-center md:w-fit md:max-w-1/2 m-auto">
        <div
          className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div
          ref={dialogRef}
          className={`inline-block ${width} max-h-[500px] md:max-h-max px-4 py-6 md:pb-11 md:p-11 flex-1 bg-primary-300 text-left shadow-xl transform transition-all md:rounded rounded-t-lg md:rounded-t overflow-auto  md:overflow-hidden`}
        >
          <div className={`${property.className}`}>{children}</div>
        </div>
      </div>
    </div>
  );
}

DialogBox.propTypes = {
  children: PropTypes.string,
  zIndex: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};
