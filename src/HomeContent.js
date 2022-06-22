import React from 'react';
import Contentbg from "./contentbg.png";
import Card from 'react-bootstrap/Card';
import './Homecontent.css';


class HomeContent extends React.Component {
    render() {
        return (

            <div className="container-fluid">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossOrigin="anonymous" />

                <div className='row'>

                    <div className="col no-gutters ">
                        <span className="header">Swimming Pool Experts</span>
                        <img src={Contentbg} className="bimage" alt="background liner image" />
                    </div>
                </div>
                <div className='row'>

                    {/*Card One column*/}
                    <div className="col">
                        <div className="card text-dark bg-light mb-3 maxw text-center">
                            <div className="card-header"><i style={{color: '#4680bd'}} className="fas fa-wrench fa-2x " /></div>
                            <div className="card-body">
                                <h5  className="card-title">Services</h5>
                            </div>
                        </div>

                    </div>
                    {/*Card Two column*/}
                    <div className="col">
                        <div className="card text-dark bg-light mb-3 maxw text-center">
                            <div className="card-header"><i style={{color: '#4680bd'}} className="fas fa-bookmark fa-2x" /></div>
                            <div className="card-body">
                                <h5 className="card-title">&nbsp;Guides&nbsp; </h5>
                            </div>
                        </div>
                    </div>
                    {/*Card Three column*/}
                    <div className="col">
                        <div className="card text-dark bg-light mb-3 maxw text-center">
                            <div className="card-header"><i style={{color: '#4680bd'}} className="fas fa-gem fa-2x" /></div>
                            <div className="card-body">
                                <h5 className="card-title">&nbsp;&nbsp;Shop&nbsp;</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default HomeContent;