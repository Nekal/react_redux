import React from 'react';

import '../styles/bootstrap.css';
import '../styles/notFound.css';

const NotFound = () => (
    <div className='row'>
      <div className='col-md-12'>
        <div className='error-template'>
          <h1>
            Oops!
          </h1>
          <h2>
            <strong>404 Not Found</strong>
          </h2>
          <div className='error-details'>
            Sorry, an error has occured, Requested page not found!
          </div>
          <div className='error-actions'>
            <a className='btn btn-primary btn-lg'>
              Take Me Home
            </a>
          </div>
        </div>
      </div>
    </div>
);

export default NotFound;
