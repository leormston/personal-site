import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './pages/Home';

export default (
    <Route path="/" component={App}>
        <Route path="./pages/Home" component={Home} />

    </Route>
)
