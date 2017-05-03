import React from 'react';
import { RouterProvider } from 'react-router5';
import View from './View';
import Menu from './Menu';

function App({
    router
}) {
    return (
        <RouterProvider router={ router }>
            <div>
                <Menu />

                <View />
            </div>
        </RouterProvider>
    );
}

export default App;
