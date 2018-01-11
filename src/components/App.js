import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from "react-router-dom/es/Route";
import AddNews from "../conteiners/AddNews";


const App = () => (
    <Router>
        <div>
            <div style={{height:936}}>
            <Header />
            <Switch>
                <Route exact path="/" component={AddNews} />
                {/*<Route path="/add" component={AddTodo} />*/}
                {/*<Route path="/edit/:id" component={EditTodo} />*/}
                {/*<Route path="/:id" component={TodoDetail} />*/}
            </Switch>
            </div>
            <Footer />
        </div>
    </Router>
)

export default App
