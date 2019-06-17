import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Layout = () => (
    <View style={styles.container}>
        <Text style={styles.text}>
            WELLCOME
        </Text>
    </View>
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