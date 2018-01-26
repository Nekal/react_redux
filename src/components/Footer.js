import React from 'react';

import '../styles/bootstrap.css';
import '../styles/footer.css';

const Footer = () => (
    <div className='footer-bottom navbar-fixed-bottom'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6'>
            <div className='copyright'>
                            © 2017, All rights reserved
            </div>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6'>
            <div className='design'>
              <p>Development by Denis Lapkovski</p>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default Footer;
