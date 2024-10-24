import React from 'react';
import { useParams } from 'react-router-dom';

const FinancialReportDetail = () => {
  const { year } = useParams();  

  return (
    <div className="container text-center">
      <h1>Financial Report for {year}</h1>
      <p>This is the detailed financial report for the year {year}.</p>
    </div>
  );
};

export default FinancialReportDetail;
