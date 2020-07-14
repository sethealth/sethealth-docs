import React from 'react';
import LIB from '@sethealth/core/dist/docs/lib.json';

// const MarkdownBlock = CompLibrary.MarkdownBlock;

const API = ({module}) => {
  const exports = LIB.children.find(c => c.name === `"${module}"`).children;
  return exports
    .filter(fn => fn.flags.isExported && fn.kindString === 'Function')
    .map(fn => (
      <>
        <h3>{renderFunction(fn)}</h3>
        <p>{fn.comment?.shortText}</p>
      </>
    ));
}

function renderFunction(fn) {
  const params = (fn.signatures[0].parameters)
    ? fn.signatures[0].parameters.map(p => p.name).join(', ')
    : '';
  return `${fn.name}(${params})`;
}

export default API;
