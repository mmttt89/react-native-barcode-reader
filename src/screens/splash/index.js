import React from "react";
import Layout from "./Layout";

export default class SplashScreen extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('AppFlow');
        }, 1000);
    }

    render() {
        return (
            <Layout />
        );
    }
}
