// ModalContent.js
import React from "react";
import { animated } from "@react-spring/web";

export default function ModalContent({ children, onClose, show }) {
  return (
    <animated.div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
      {children}
    </animated.div>
  );
}
