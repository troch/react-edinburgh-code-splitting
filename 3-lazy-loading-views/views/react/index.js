import React from 'react';

export default class LazyHomeView extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            ViewComponent: null
        };
    }

    componentDidMount() {
        import('./ReactView').then((module) => {
            this.setState({
                ViewComponent: module.default
            })
        });
    }

    render() {
        const { ViewComponent } = this.state;

        if (!ViewComponent) {
            return <div></div>;
        }

        return <ViewComponent />
    }
}
