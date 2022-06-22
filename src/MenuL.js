import React from 'react';
import { Link } from 'react-router-dom';
import './MenuL.css';


class MenuL extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <div className="col shiftdown">
                        <Link to="/" type="button" className="btn btn-primary buttonLF">Home</Link>
                        <Link to="/Services" type="button" className="btn btn-primary buttonL">Services</Link>
                        <Link to="/Guides" type="button" className="btn btn-primary buttonL">Guides</Link>
                        <Link to="/Shop" type="button" className="btn btn-primary buttonL">Shop</Link>
                    </div>      
            </React.Fragment >
        );
    }
}
export default MenuL;