import React from 'react';

// --- 1. THE DATA ARRAY (No import needed, it's defined here) ---
const jobData = [
  {
    id: 1,
    company: 'Meta',
    title: 'Frontend Engineer',
    rate: 'Rs 65,000 / month', 
    logoBg: '#4F46E5', // Indigo
  },
  {
    id: 2,
    company: 'Amazon',
    title: 'Backend Developer',
    rate: 'Rs 70,000 / month', 
    logoBg: '#F97316', // Orange
  },
  {
    id: 3,
    company: 'Apple',
    title: 'iOS Developer',
    rate: 'Rs 90,000 / month', 
    logoBg: '#1F2937', // Dark Gray
  },
  {
    id: 4,
    company: 'Netflix',
    title: 'Machine Learning Engineer',
    rate: 'Rs 1,10,000 / month', 
    logoBg: '#DC2626', // Red
  },
  {
    id: 5,
    company: 'Google',
    title: 'Cloud Solutions Architect',
    rate: 'Rs 1,20,000 / month', 
    logoBg: '#2563EB', // Blue
  },
  {
    id: 6,
    company: 'Microsoft',
    title: 'Data Scientist',
    rate: 'Rs 85,000 / month', 
    logoBg: '#10B981', // Green
  },
  {
    id: 7,
    company: 'IBM',
    title: 'AI Research Engineer',
    rate: 'Rs 95,000 / month', 
    logoBg: '#1E3A8A', // Dark Blue
  },
  {
    id: 8,
    company: 'Tencent',
    title: 'Game Developer (C++)',
    rate: 'Rs 80,000 / month', 
    logoBg: '#0D9488', // Teal
  },
];

// --- 2. THE HELPER COMPONENT ---
const CompanyLogo = ({ company, logoBg }) => {
  const initials = company.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
  
  return (
    <div className="logo-box" style={{ backgroundColor: logoBg }}>
      {initials}
    </div>
  );
};

// --- 3. THE CARD COMPONENT ---
const SimpleCard = ({ title, company, logoBg, rate }) => {
  return (
    <div className="card">
      
      <div className="card-header">
        <CompanyLogo company={company} logoBg={logoBg} />
        <h2 className="card-title">
          {title}
        </h2>
      </div>

      <p className="card-company-name">
        Company: <span>{company}</span>
      </p>

      <div className="card-rate-container">
        <span className="rate-text">{rate}</span>
      </div>

      <div className="card-footer">
        <button className="view-details-button">
          View Details
        </button>
      </div>
      
    </div>
  );
};

// --- 4. THE MAIN APP COMPONENT (Where the map function is used) ---
const App5 = () => {
  return (
    <div className="app-container">
      {/* Injecting CSS here for a single-file solution */}
      <style>
        {`
        .app-container {
            min-height: 100vh;
            background-color: #f9fafb;
            padding: 2rem;
            font-family: Arial, sans-serif;
        }
        .main-content {
            max-width: 1280px;
            margin: 0 auto;
        }
        .main-title {
            font-size: 1.875rem;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 2rem;
            text-align: center;
        }
        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
        }
        .card {
            background-color: #ffffff;
            padding: 1.5rem;
            border-radius: 1rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            border: 1px solid #f3f4f6;
        }
        .card:hover {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        .card-header {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
            min-height: 40px; 
        }
        .logo-box {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            font-weight: bold;
            font-size: 1.125rem;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
            margin-right: 0.75rem;
            flex-shrink: 0;
        }
        .card-title {
            font-size: 1.25rem;
            font-weight: 800;
            color: #111827;
            line-height: 1.2;
        }
        .card-company-name {
            font-size: 0.875rem;
            color: #6b7280;
            margin-top: 0.5rem;
            margin-bottom: 1rem;
        }
        .card-company-name span {
            font-weight: 600;
            color: #374151;
        }
        .card-rate-container {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
        }
        .rate-text {
            font-size: 1.5rem;
            font-weight: bold;
            color: #111827;
        }
        .card-footer {
            padding-top: 1rem;
            margin-top: auto;
            border-top: 1px solid #f3f4f6;
        }
        .view-details-button {
            padding: 0.5rem 1.25rem;
            background-color: #4f46e5;
            color: #ffffff;
            font-size: 0.875rem;
            font-weight: 600;
            border-radius: 0.75rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            border: none;
            transition: background-color 0.2s;
        }
        .view-details-button:hover {
            background-color: #4338ca;
        }
        `}
      </style>
      <div className="main-content">
        <h1 className="main-title">
          Prop Demo: Simple Job Cards (Pure CSS)
        </h1>
        
        <div className="card-grid">
          {/* This is the correct use of the map function on the jobData array */}
          {jobData.map(job => (
            <SimpleCard 
              key={job.id} 
              title={job.title} 
              company={job.company} 
              logoBg={job.logoBg}
              rate={job.rate} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App5;
