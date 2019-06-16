import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import LottieView from 'lottie-react-native';

export default class BarcodeFinder extends Component {

    render() {
        let { width, height } = this.props;
        return (
            <View style={styles.container}>
                <View style={[styles.finder, { width: width, height: height }]}>
                    <LottieView source={require('../assets/animations/code-scanner1.json')} autoPlay loop />
                </View>
            </View>
        );
    }
}


var styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    finder: {
        backgroundColor: 'transparent',
    },    
});