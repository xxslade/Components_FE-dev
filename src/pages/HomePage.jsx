import React from 'react';
import buttonTemplates from './designs/buttonTemplates';
import DynamicCompiler from '../components/DynamicCompiler';

const HomePage = () => {
  const allCompilers = Object.entries(buttonTemplates).map(([key, code]) => {
  return <DynamicCompiler key={key} defaultCode={code} />;
});

  return (
    
    <>
    {/* // <div className="p-4 grid grid-cols-2 gap-4"> */}

     {allCompilers}
    {/* // </div> */}
    </>
  );
};

export default HomePage;
