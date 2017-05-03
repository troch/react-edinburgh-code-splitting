import React from 'react';

export default class LazyHomeView extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            ViewComponent: null
        };
    }

    componentDidMount() {
        require.ensure(
            [],
            () => {
                this.setState({
                    ViewComponent: require('./HomeView').default
                })
            },
            'home-view'
        );
    }

    render() {
        const { ViewComponent } = this.state;

        if (!ViewComponent) {
            return <div></div>;
        }

        return <ViewComponent />
    }
}
