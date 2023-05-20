import NorthIcon from "@mui/icons-material/North";

import React, { useState } from "react";

const UpwardArrow = () => {
  const [showicon, setShowicon] = useState(false);

  const getscroller = () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 300) {
      setShowicon(true);
    } else {
      setShowicon(false);
    }
  };

  window.addEventListener("scroll", getscroller);

  const gototop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        className="text-white bg-primary"
        style={{
          display: showicon ? "block" : "none",
          borderRadius: "50%",
          border: "none",
          padding: "10px",
          position: "fixed",
          bottom: 10,
          right: 10,
        }}
        onClick={gototop}
      >
        <NorthIcon></NorthIcon>
      </button>
    </>
  );
};

export default UpwardArrow;
