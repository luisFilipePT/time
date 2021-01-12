import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Layout from './shared/Layout'

import List from './projects/pages/List/List'
import Detail from './projects/pages/Detail/Detail'

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/project/:slug">
                        <Detail />
                    </Route>
                    <Route path="/">
                        <List />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    )
}

export default App
