// PortalComponent.js
import React from "react";
import { createPortal } from "react-dom";

const PortalComponent = ({ children, onClose }) => {
  return createPortal(
    <div className="portal" onClick={onClose}>
      {children}
    </div>,
    document.body
  );
};

export default PortalComponent;
