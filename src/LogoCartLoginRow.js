import React from 'react';
import './LogoCartLoginRow.css';
import Logo from './Logo';

class LogoCartLoginRow extends React.Component {
  render() {

    const onCartClick=(mode)=>{
      console.log("Cart icon clicked");
  }

    return (
      <React.Fragment>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossOrigin="anonymous" />

            <div className="col-4 text-center mt-1 mb-1">
              <Logo />
            </div>

              <div className="col  mt-1 mb-1">
                
              </div>
              <div className="col mt-1 mb-1">
                
              </div>
              <div className="col  mt-1 mb-1">
                
              </div>
              <div className="col  mt-1 mb-1">
                
              </div>
              <div className="col  mt-1 mb-1">
                
              </div>
              <div className="col  mt-1 mb-1">
                
              </div>
              <div className="col text-center mt-4 mb-1 ">
              <button onClick={()=>onCartClick('cart')}><i className="fas fa-shopping-cart" /> </button>
              </div>
              <div className="col  text-left mt-4 mb-1 ">
              <button onClick={()=>onCartClick('cart')}><i className="fas fa-bars" /> </button>

              </div>
      </React.Fragment>
    );
  }
}
export default LogoCartLoginRow;
