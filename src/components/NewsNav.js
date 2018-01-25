import React from 'react';
import {Container, Row, Col, Jumbotron} from 'reactstrap';
import {connect} from 'react-redux';
import '../styles/bootstrap.css';
import {Link} from 'react-router-dom';

let NewsNav = ({userData}) => {
    return (
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
        </div>);
};
NewsNav = connect()(NewsNav);
export default NewsNav;
