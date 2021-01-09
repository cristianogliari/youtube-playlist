import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

import Home from '../pages/home/index';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path={ROUTES.HOME} component={Home} />
            </Switch>
        </Router>
    );
}

export default Routes;