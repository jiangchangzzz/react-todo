import * as React from 'react';
import { Route } from 'react-router-dom';

import Red from './components/Red';
import Green from './components/Green';

interface IRoute{
    path: string;
    component: React.StatelessComponent<any>,
    routes?: IRoute[];
}

export const routes: IRoute[] = [
    {
        path: '/red',
        component: Red
    },
    {
        path: '/green',
        component: Green
    }
];

interface IRouteWithSubRoutes{
    route: IRoute
}

export const RouteWithSubRoutes = (props: IRouteWithSubRoutes) => {
    const { route } = props;
    return (<Route 
                path={route.path}
                render={props => (  
                <route.component {...props} routes={route.routes}/>
            )}
        />);
};