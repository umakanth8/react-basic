import React from 'react';
import { useParams } from 'react-router-dom';

const FCRAreportDetail = () => {
  const { year } = useParams();  

  return (
    <div className="container text-center">
      <h1>FCRA Report for {year}</h1>
      <p>This is the detailed FCRA report for the year {year}.</p>
    </div>
  );
};

export default FCRAreportDetail;
