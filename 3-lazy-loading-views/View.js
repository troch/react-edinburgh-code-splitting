import React from 'react';
import { withRoute } from 'react-router5';

import HomeView from './views/home/index';
import ReactView from './views/react/index';

function View({
    route
}) {
    if (!route) {
        return <div></div>;
    }

    if (route.name === 'home') {
        return <HomeView />;
    }

    if (route.name === 'react') {
        return <ReactView />;
    }
}

export default withRoute(View);
