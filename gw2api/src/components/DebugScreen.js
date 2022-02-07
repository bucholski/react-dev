import React from 'react';

const DebugScreen = ({ output }) => {
  return (
  <p className="debug">
    {JSON.stringify(output, null, 2)}
  </p>
  )};

export default DebugScreen;