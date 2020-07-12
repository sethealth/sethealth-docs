import React from 'react';
import COMPONENTS from '@sethealth/core/dist/docs';

// const MarkdownBlock = CompLibrary.MarkdownBlock;

export const WebComponent = ({tag}) => {
  const cmp = COMPONENTS.components.find(c => c.tag === tag);
  return (
    <>
      <p>{cmp.docs}</p>
      {cmp.props.length > 0 && (
        <>
        <h2>Properties</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Docs</th>
                <th>Type</th>
                <th>Default value</th>
              </tr>
            </thead>
            <tbody>
            {cmp.props.map(prop => (
              <tr>
                <td>{prop.name}</td>
                <td>{prop.docs}</td>
                <td><code>{prop.type}</code></td>
                <td><code>{prop.default}</code></td>
              </tr>
            ))}
            </tbody>
          </table>
        </>
      )}
      {cmp.events.length > 0 && (
        <>
          <h2>Events</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Docs</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
            {cmp.events.map(prop => (
              <tr>
                <td>{prop.event}</td>
                <td>{prop.docs}</td>
                <td><code>{prop.type}</code></td>
              </tr>
            ))}
            </tbody>
          </table>
          <h2>CSS parts</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Docs</th>
              </tr>
            </thead>
            <tbody>
            {cmp.parts.map(part => (
              <tr>
                <td>{part.name}</td>
                <td>{part.docs}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}