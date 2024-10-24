import React from 'react';
import { useParams } from 'react-router-dom';

const AnnualReportDetail = () => {
  const { year } = useParams();

  return (
    <div className="container text-center">
      <h1>Annual Report for {year}</h1>
      <p>This is the detailed annual report for the year {year}.</p>
    </div>
  );
};

export default AnnualReportDetail;
