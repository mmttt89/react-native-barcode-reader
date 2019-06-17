import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

const Layout = ({ }) => (
    <WebView
        onMessage={(data) => console.log("DATA!!!!!!!", data)}
        source={{ uri: 'http://google.com' }} />
)

export default Layout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        fontWeight: '900'
    }
}) 