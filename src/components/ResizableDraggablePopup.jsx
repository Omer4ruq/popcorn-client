import React from "react";
import { Rnd } from "react-rnd";
import "./ResizableDraggablePopup.css";

const ResizableDraggablePopup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <Rnd
        default={{
          x: 100,
          y: 100,
          width: 400,
          height: 300,
        }}
        minWidth={300}
        minHeight={200}
        bounds="window" // Constrains movement within the viewport
        style={{
          background: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          overflow: "auto", // Scrollbar appears for content overflow
        }}
      >
        <div className="popup-header">
          <h3 className="popup-title">Popup Title</h3>
          <button onClick={onClose} className="close-button">
            ✖
          </button>
        </div>
        <div className="popup-content">{children}</div>
      </Rnd>
    </div>
  );
};

export default ResizableDraggablePopup;
