import React, { Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
  }

  openCart = () => {
    this.setState({
      isOpened: true,
    });
  };

  closeCart = () => {
    this.setState({
      isOpened: false,
    });
  };

  render() {
    let { userCart, totalAmount, removeProductFromCart } = this.props;
    let cartOpened = this.state.isOpened;
    if (!cartOpened) {
      return <CloseCart openCart={this.openCart} userCart= {userCart}/>;
    }
    if (cartOpened) {
      return (
        <div className="usercart-container">
        {/* button to close this cart  */}

        <button className="close-cart" onClick={this.closeCart}>❌</button>
          <header>
            <figure>
              <img src="static/bag-icon.png"></img>
              <span id="product-count">{userCart.length}</span>
            </figure>
            <span>Cart</span>
          </header>
          {userCart.map((product) => {
            totalAmount += product.price;
            return (
              <div className="cart-product">
                <img src={"/static/products/" + product.sku + "_2.jpg"} />
                <div className="product-information">
                  <button id={product.id} onClick={removeProductFromCart}>
                    ❎
                  </button>
                  <h4>{product.title}</h4>
                  <p>{product.price + product.currencyFormat}</p>
                </div>
              </div>
            );
          })}
          <div className="total-amount-container flex-row">
            <h4>subtotal : </h4>
            <span>{totalAmount}</span>
          </div>

          <button className="checkout">checkout</button>
        </div>
      );
    }
  }
}

function CloseCart(props) {
  let {openCart , userCart} = props;
  return (
    <>
      <div className="cartopener" onClick={openCart}>
        <header>
          <figure>
            <img src="static/bag-icon.png"></img>
            <span id="product-count">{userCart.length}</span>
          </figure>
        </header>
      </div>
    </>
  );
}

export default Cart;