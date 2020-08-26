//routing files
import React, {lazy, Suspense} from 'react';
import {getItemLocalStorage} from '../Utils/Util';
import '../Assets/Styles/Common/style.css';
import {STATUS_INACTIVE, STATUS_ACTIVE} from '../Utils/Constants';
import {RENDER_URL} from '../Utils/Urls';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

const DashboardComponent = lazy(() => import("../Modules/Dashboard/DashboardComponent"));
const App = lazy(() => import("../App"));

const Routes = () => {
    let isUserLoggedOut = getItemLocalStorage('token') ? STATUS_INACTIVE : STATUS_ACTIVE;
    return (
        <Router>
            <Suspense fallback={<div className="displayNone"> </div>}>
                <Switch>
                    <Route exact path={RENDER_URL.HOME_URL} component={App}/>
                    <Route path={RENDER_URL.DASHBOARD_URL} component={DashboardComponent}/>                    
                </Switch>
            </Suspense>
            {isUserLoggedOut ? (<Redirect to={'/'}/>) : null}
        </Router>
    )
};
export default Routes;