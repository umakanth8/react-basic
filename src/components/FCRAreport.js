import React from 'react';
import { useNavigate } from 'react-router-dom';

const FCRAReport = () => {
  const navigate = useNavigate();

  const handleViewClick = (year) => {
    navigate(`/fcra-report/${year}`);  
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card bg-danger text-white">
            <div className="card-body">
              <p>FCRA Report 2019 - 2020</p>
              <button className="btn btn-light" onClick={() => handleViewClick('2019-2020')}>View</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card bg-danger text-white">
            <div className="card-body">
              <p>FCRA Report 2020 - 2021</p>
              <button className="btn btn-light" onClick={() => handleViewClick('2020-2021')}>View</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card bg-danger text-white">
            <div className="card-body">
              <p>FCRA Report 2021 - 2022</p>
              <button className="btn btn-light" onClick={() => handleViewClick('2021-2022')}>View</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card bg-danger text-white">
            <div className="card-body">
              <p>FCRA Report 2022 - 2023</p>
              <button className="btn btn-light" onClick={() => handleViewClick('2022-2023')}>View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FCRAReport;
