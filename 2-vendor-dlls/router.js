import createRouter from 'router5';
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';

const routes = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'react',
        path: '/react'
    }
];

const router = createRouter(routes)
    .usePlugin(listenersPlugin())
    .usePlugin(browserPlugin())

export default router;
