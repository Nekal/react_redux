import React from 'react'
import {Container, Row, Col, Jumbotron,} from 'reactstrap';
import {connect} from "react-redux";
import '../styles/bootstrap.css'
import {Link} from "react-router-dom";

let Header = () => {
    return (
        <div>
            <Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <h1>Welcome to React</h1>
                            {/*<p>*/}
                                <div>
                                    <form>
                                        <Link to="/" className="btn btn-primary btn-large">All news</Link>
                                        <p><Link to="/add" className="btn btn-primary btn-large">Create post</Link></p>
                                    </form>
                                </div>
                            {/*</p>*/}
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>)
}
Header = connect()(Header)
export default Header