import React, { useState } from "react";
import "../css/pages/layout.css";
import "../css/pages/collapse.css";
import "../css/pages/about.css";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header">
        <h2>{title}</h2>
        <i
          className={`fas fa-chevron-down chevron-icon ${
            isOpen ? "rotated" : ""
          }`}
          onClick={toggleCollapse}
        ></i>
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
