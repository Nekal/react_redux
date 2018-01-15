import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from "react-router-dom/es/Route";
import AddNewsContainer from "../conteiners/AddNewsContainer";
import EditNewsContainer from "../conteiners/EditNewsContainer";
import NewsListContainer from "../conteiners/NewsListContainer";
import NewsDetailContainer from "../conteiners/NewsDetailContainer";

const App = () => (
    <Router>
        <div>
            <div style={{height:936}}>
            <Header />
            <Switch>
                <Route exact path="/" component={NewsListContainer} />
                <Route path="/add" component={AddNewsContainer} />
                <Route path="/edit/:id" component={EditNewsContainer} />
                <Route path="/:id" component={NewsDetailContainer}/>
            </Switch>
            </div>
            <Footer />
        </div>
    </Router>
)

export default App
