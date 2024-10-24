import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Financials = () => {
  return (
    <div className="container my-5">
 
 <div style={{ width: '90vw', overflow: 'hidden' }}>
        <img 
          src="/images/wave-banner.89427ed3.png" 
          alt="Wave Banner" 
          style={{ width: '100%', height: 'auto' }} 
        />
      </div>


      <div className="row text-center">
        <div className="col-lg-4 col-md-6 mb-4">
          <Link to="annual-report" className="btn btn-light btn-block">Annual Report</Link>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <Link to="financial-report" className="btn btn-light btn-block">Financial Report</Link>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <Link to="fcra-report" className="btn btn-light btn-block">FCRA Report</Link>
        </div>
      </div>
    
      <Outlet />
    </div>
  );
};

export default Financials;
