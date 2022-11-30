import React from 'react';

const name = 'Eric';
const thoughts = 'is the cats pajamas';

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is ({name})</h1>
          <h2>I think React ({thoughts})</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
