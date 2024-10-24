import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Policies = () => {
    return (
        <div className="container my-5">
            <h2 className="text-left text-primary">Our Policies</h2>
            <div className="row">

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title">Child Protection Policy (CPP - Going to school)</h5>
                            <a href="#" className="card-link text-primary">
                                Click to view the policy document
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title">Whistle Blower Policy</h5>
                            <a href="#" className="card-link text-primary">
                                Click to view the policy document
                            </a>
                        </div>
                    </div>
                </div>


                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <h5 className="card-title">Privacy Policy</h5>
                            <a href="#" className="card-link text-primary">
                                Click to view the policy document
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Policies;
