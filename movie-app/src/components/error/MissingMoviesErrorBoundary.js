import React from "react";

export class MissingMoviesErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    render() {
        if (this.state.hasError) {
            return <h1>Can't render the movies</h1>;
        }

        return this.props.children;
    }
}