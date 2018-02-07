import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/bootstrap.css';
import '../styles/newsDetail.css';
import DeleteNewsContainer from '../conteiners/DeleteNewsContainer';

const NewsDetailComponent = ({ news, userData }) => (
    <div className='container'>
      <div className='row detail'>
        <div className='col-md-10'>
          <div className='thumbnail'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <h1 className='mt-3'>{news.activeNews.title}</h1>
                  <hr />
                  <p>{news.activeNews.description}</p>

                  {userData && userData.role === 'admin' ? (

                    <ul className='list-inline list-unstyled'>
                      <hr />
                      <li><DeleteNewsContainer id={news.activeNews.id}/></li>
                      <li><Link className='btn btn-primary' to={`/edit/${news.activeNews.id}`}>Edit</Link></li>
                    </ul>) : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);

NewsDetailComponent.propTypes = {
  news: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired
};

export default NewsDetailComponent;
