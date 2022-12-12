import React from "react";

function Header(props) {
  let {  filterbyprice, totalproducts } = props;
  return (
    <>
      <header className="price-filter-container">
        <div className="product-count">
          <h3>{totalproducts.length} product found</h3>
        </div>
        <div className="price-filters">
          <select
            className="drop-down-container"
            value="filter by price"
            name="priceoption"
            onChange={ filterbyprice}
          >
            <option value="increment">lowest to highest</option>
            <option value="decrement">highest to lowest</option>
          </select>
        </div>
      </header>
    </>
  );
}

export default Header;