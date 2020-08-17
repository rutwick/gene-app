import React, { Component } from 'react';
import Home from './pages/Home';
import List from './pages/List';
import Navbar from './components/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/:post_id' component={List} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;