import React from 'react'
import DynamicCompiler from '../components/DynamicCompiler'
import cardTemplates from './designs/cardTemplates'

const CardPage = () => {
  const allCompilers = Object.entries(cardTemplates).map(([key, code]) => {
  return <DynamicCompiler key={key} defaultCode={code} />;
});

  return (
    <>
     {allCompilers}
    </>
  );
}

export default CardPage
