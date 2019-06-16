import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import LightOff from "@Assets/icons/light-off";
import LightOn from "@Assets/icons/light-on";

const TorchButton = ({ torchOn, handleTourch }) => (
    <TouchableOpacity onPress={() => handleTourch(torchOn)}>
        <View style={styles.torchView}>
            {torchOn ? <LightOn /> : <LightOff />}
        </View>
    </TouchableOpacity>
)
export default TorchButton;

const styles = StyleSheet.create({
    torchView: {
        margin: wp("4%")
    }
});
