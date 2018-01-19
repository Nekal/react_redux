import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from "react-router-dom/es/Route";
import AddNewsContainer from "../conteiners/AddNewsContainer";
import EditNewsContainer from "../conteiners/EditNewsContainer";
import NewsListContainer from "../conteiners/NewsListContainer";
import NewsDetailContainer from "../conteiners/NewsDetailContainer";
import SignUpContainer from "../conteiners/SignUpContainer";
import SignInContainer from "../conteiners/SignInContainer";

const App = () => (
    <Router>
        <div>
            <div style={{height:936}}>
                <Header />
                <Switch>
                    <Route exact path="/" component={NewsListContainer} />
                    <Route path="/add" component={AddNewsContainer} />
                    <Route path="/edit/:id" component={EditNewsContainer} />
                    <Route path="/signup" component={SignUpContainer} />
                    <Route path="/signin" component={SignInContainer} />
                    <Route path="/news/:id" component={NewsDetailContainer}/>
                </Switch>
            </div>
            <Footer />
        </div>
    </Router>
)

export default App

