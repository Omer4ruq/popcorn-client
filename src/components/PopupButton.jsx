import React, { useState } from "react";
import ResizableDraggablePopup from "./ResizableDraggablePopup";

const PopupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openPopup} className="bg-white">
        Open Popup
      </button>
      <ResizableDraggablePopup isOpen={isOpen} onClose={closePopup}>
        <p>This is the content of the popup. Add anything you like here!</p>
        <p>Resize or drag me anywhere!</p>
      </ResizableDraggablePopup>
    </div>
  );
};

export default PopupButton;
