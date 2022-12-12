import React from "react";
export default function Aside(props) {
  let { handleSizeFilter, activeButton } = props;
  return (
    <aside>
      <button className={activeButton("S")} onClick={handleSizeFilter}>
        S
      </button>
      <button className={activeButton("XS")} onClick={handleSizeFilter}>
        XS
      </button>
      <button className={activeButton("M")} onClick={handleSizeFilter}>
        M
      </button>
      <button className={activeButton("L")} onClick={handleSizeFilter}>
        L
      </button>
      <button className={activeButton("X")} onClick={handleSizeFilter}>
        X
      </button>
      <button className={activeButton("XL")} onClick={handleSizeFilter}>
        XL
      </button>
      <button className={activeButton("XXL")} onClick={handleSizeFilter}>
        XXL
      </button>
    </aside>
  );
}