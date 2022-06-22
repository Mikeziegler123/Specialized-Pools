import React from 'react';
import logo from "./Images/logo.png";
class Logo extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="navbar" bg="dark" variant="dark">
                    <div className="navbar-brand">
                            <img alt="" src={logo} className="d-inline-block align-top" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Logo;


