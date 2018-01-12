import React from 'react'
import {Container, Row, Col, Jumbotron,} from 'reactstrap';
import {connect} from "react-redux";
import '../styles/bootstrap.css'

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
                                        <a href="/" className="btn btn-primary btn-large">All news</a>
                                        <p><a href="/add" className="btn btn-primary btn-large">Create post</a></p>
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