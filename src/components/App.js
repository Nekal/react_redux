import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from "react-router-dom/es/Route";
import AddNewsContainer from "../conteiners/AddNewsContainer";
import NewsList from "./NewsList";
import NewsDetail from "./NewsDetail";
import EditNewsContainer from "../conteiners/EditNewsContainer";


const App = () => (
    <Router>
        <div>
            <div style={{height:936}}>
            <Header />
            <Switch>
                <Route exact path="/" component={NewsList} />
                <Route path="/add" component={AddNewsContainer} />
                <Route path="/edit/:id" component={EditNewsContainer} />
                <Route path="/:id" component={NewsDetail}/>
            </Switch>
            </div>
            <Footer />
        </div>
    </Router>
)

export default App
