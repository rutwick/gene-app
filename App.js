import React, { Component } from 'react'
import Home from './pages/Home'
import List from './pages/List'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, HashRouter, Switch } from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter>
                <div className="container">
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/list/:id/:position/:letter' component={List} />
                    </Switch>
                    <Footer />
                </div>
            </HashRouter>
        )
    }
}

export default App;