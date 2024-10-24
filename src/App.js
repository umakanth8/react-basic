import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './components/About';
import Financials from './components/Financials';
import Contactus from './components/Contactus';
import Supporters from './components/Supporters';
import Policies from './components/Policies';
import Projects from './components/Projects';
import AnnualReport from './components/AnnualReport';
import Financialreport from './components/Financialreport';  // Make sure to import FinancialReport component
import FCRAreport from './components/FCRAreport';
import FinancialReportDetail from './components/FinancialReportDetail'; 
import AnnualReportDetail from './components/AnnualReportDetail';
import FCRAreportDetail from './components/FCRAreportDetail';
// New component to show detailed view
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="page-container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/supporters" element={<Supporters />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contactus />} />

          <Route path="/financials" element={<Financials />}>
            <Route path="annual-report" element={<AnnualReport />} />
            <Route path="financial-report" element={<Financialreport />} />
            <Route path="fcra-report" element={<FCRAreport />} />
          </Route>

          <Route path="/financial-report/:year" element={<FinancialReportDetail />} />
          <Route path="/annual-report/:year" element={<AnnualReportDetail />} />
          <Route path="/fcra-report/:year" element={<FCRAreportDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
