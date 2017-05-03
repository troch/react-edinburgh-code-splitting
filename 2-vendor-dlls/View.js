import React from 'react';
import { withRoute } from 'react-router5';

function View({
    route
}) {
    if (!route) {
        return <div></div>;
    }

    if (route.name === 'home') {
        return <h1>Hello</h1>;
    }

    if (route.name === 'react') {
        return <h1>React is awesome</h1>;
    }
}

export default withRoute(View);
