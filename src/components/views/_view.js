import React from "react";

export default class View extends React.Component {
    render() {
        const Component = this.props.component;
        return <Component />;
    }
}
