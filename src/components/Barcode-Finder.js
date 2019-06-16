import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class BarcodeFinder extends Component {

    render() {
        let { width, height, borderWidth, borderColor } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: "#000", opacity: 0.5 }}></View>
                <View style={[styles.finder, { width: width, height: height }]}>
                    <View style={[styles.topLeftEdge,
                    {
                        borderLeftWidth: borderWidth,
                        borderTopWidth: borderWidth,
                        borderColor: borderColor
                    }]} />
                    <View style={[styles.topRightEdge,
                    {
                        borderRightWidth: borderWidth,
                        borderTopWidth: borderWidth,
                        borderColor: borderColor
                    }]} />
                    <View style={[styles.bottomLeftEdge,
                    {
                        borderLeftWidth: borderWidth,
                        borderBottomWidth: borderWidth,
                        borderColor: borderColor
                    }]} />
                    <View style={[styles.bottomRightEdge,
                    {
                        borderRightWidth: borderWidth,
                        borderBottomWidth: borderWidth,
                        borderColor: borderColor
                    }]} />
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
        backgroundColor: 'transparent'
    },
    topLeftEdge: {
        position: "absolute",
        top: 0,
        left: 0,
        width: 40,
        height: 20
    },
    topRightEdge: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 40,
        height: 20
    },
    bottomLeftEdge: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: 40,
        height: 20
    },
    bottomRightEdge: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 40,
        height: 20
    }
});