import React from 'react';
import LIB from '@sethealth/core/dist/docs/lib.json';

// const MarkdownBlock = CompLibrary.MarkdownBlock;

const API = ({module}) => {
  const exports = LIB.children.find(c => c.name === `"${module}"`).children;
  return exports
    .filter(fn => fn.flags.isExported && fn.kindString === 'Function')
    .map(fn => (
      <>
        <h4 class="code-h4">
          <a
            aria-hidden="true"
            tabindex="-1"
            class="anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-"
            id={fn.name}
          />
          <code>{module}.{renderFunction(fn)}</code>
          <a
            aria-hidden="true"
            tabindex="-1"
            class="hash-link"
            href={'#'+fn.name}
            title="Direct link to heading"
          >
            #
          </a>
        </h4>
        <p class="api-docs">
          {fn.comment?.shortText}
        </p>
        <p class="api-docs">
          {fn.comment?.text}
        </p>
        <br></br>
      </>
    ));
}

function renderFunction(fn) {
  const params = (fn.signatures[0].parameters)
    ? fn.signatures[0].parameters.map(p => {
      const isOptional = p.flags.isOptional;
      const typeConnector = isOptional ? '?:' : ':';
      const type = p.type.type === 'union'
        ? p.type.types.map(t => t.name).join(' | ')
        : p.type.name;
      return `\n  ${p.name}${typeConnector} ${type}`;
    }).join(',')+'\n'
    : '';
  return [
    `${fn.name}(`,
    <span class="params">{params}</span>,
    ')',
  ];
}

export default API;
