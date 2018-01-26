import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Row, Col, Jumbotron } from 'reactstrap';
import '../styles/bootstrap.css';

const NewsNav = ({ userData }) => (
    <div>
      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <h1>Welcome to React</h1>
              <div>
                {userData !== null && userData.role === 'admin' ? (
                  <form>
                    <p><Link to='/add' className='btn btn-primary btn-large'>Create post</Link></p>
                  </form>) : ''}
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
);

NewsNav.propTypes = {
  userData: PropTypes.func.isRequired
};

export default NewsNav;
