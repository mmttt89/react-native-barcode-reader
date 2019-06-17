import React from "react";
import Layout from "./Layout";

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        const { navigation } = this.props;
        return (
            <Layout navigation={navigation} />
        );
    }
}
