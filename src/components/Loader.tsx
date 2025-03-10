import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div className="loader-container">
      <Spinner
        animation="border"
        role="status"
        style={{ width: '5rem', height: '5rem' }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
