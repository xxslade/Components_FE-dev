import React from 'react'
import DynamicCompiler from '../components/DynamicCompiler'
import navTemplates from './designs/navTemplates'

const NavPage = () => {
  const allCompilers = Object.entries(navTemplates).map(([key, code]) => {
  return <DynamicCompiler key={key} defaultCode={code} />;
});

  return (
    
    <>
     {allCompilers}
    </>
  );
}

export default NavPage
