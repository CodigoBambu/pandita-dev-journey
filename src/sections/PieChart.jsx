
import React from 'react';
import LanguageChart from '../components/LanguageChart';

const ChartPie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12"
    data-scroll data-scroll-section>
      <div className="container mx-auto px-4"
      data-scroll data-scroll-container>
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center"
        data-scroll>
          Mi Portfolio Tecnológico
        </h1>
        <div className="max-w-4xl mx-auto h-[600px]" data-scroll>
          <LanguageChart />
        </div>
      </div>
    </div>
  );
};  

export default ChartPie;
