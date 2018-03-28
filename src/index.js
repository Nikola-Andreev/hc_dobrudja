import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import {Router, Route, Switch} from 'react-router'
import App from './components/App'
import News from './components/News'
import Club from './components/Club'
import Team from './components/Team'
import Season from './components/Season'
import Gallery from './components/Gallery'
import Contacts from './components/Contacts'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()

ReactDOM.render(
    <Router history={history}>
        <Route>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/club" component={Club}/>
                <Route exact path="/team" component={Team}/>
                <Route exact path="/season" component={Season}/>
                <Route exact path="/gallery" component={Gallery}/>
                <Route exact path="/contacts" component={Contacts}/>
            </Switch>
        </Route>
    </Router>, document.getElementById('root')
)
