import React from "react";
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from "@Screens/home";
import WebViewScreen from "@Screens/webview";
import SplashScreen from "@Screens/splash";

const AppNavigator = createStackNavigator(
    {
        HomeScreen,
        WebViewScreen,        
    });

const FlowNavigator = createSwitchNavigator(
    {
        AppFlow: AppNavigator,
        SplashScreen,
    }, {
        initialRouteName: 'SplashScreen'
    });

const AppContainer = createAppContainer(FlowNavigator);

export default class Root extends React.Component {
    render() {
        return <AppContainer />;
    }
}

