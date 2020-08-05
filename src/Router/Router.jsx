import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Counter from '../Counter/Counter'
import Jotto from '../Jotto/Jotto'

function Router() {
    return (
        <Switch>
            <Route path="/" exact>
                <Counter />
            </Route>
            <Route path="/jotto-app">
                <Jotto />
            </Route>
        </Switch>
    )
}

export default Router