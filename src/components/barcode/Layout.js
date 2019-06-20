import React from "react";
import { Text, View, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RNCamera } from "react-native-camera";
import BarcodeFinder from "./Barcode-Finder";
import TorchButton from "./Torch-Button";

const Layout = ({ isLoading, torchOn, isCameraReady, barcode, onBarCodeRead, handleTorch, handleCameraReady, navigation }) => (
    <View style={styles.container}>
        {!isLoading ?
            <View style={{ flex: 1 }}>
                <RNCamera
                    onCameraReady={handleCameraReady}
                    onBarCodeRead={onBarCodeRead}
                    barcodeFinderWidth={280}
                    barcodeFinderHeight={320}
                    style={styles.camera}
                    type={RNCamera.Constants.Type.back}
                    flashMode={(isCameraReady && torchOn) ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    captureAudio={false}
                >
                    <BarcodeFinder width={280} height={320} />
                </RNCamera>
                <View style={styles.bottomBox}>
                    <View style={styles.headerBox}>
                        <View style={{ width: wp('20%') }}>
                        </View>
                        <Text style={styles.headerText}>BARCODE SCANNER</Text>
                        <View style={{ width: wp('20%') }}>
                            <TorchButton torchOn={torchOn} handleTourch={handleTorch} />
                        </View>
                    </View>
                    <View style={styles.barcode}>
                        <Text style={{ marginBottom: 5 }}>BARCODE DATA: {barcode.data}</Text>
                        <Text style={{ marginBottom: 5 }}>BARCODE TYPE: {barcode.type}</Text>
                    </View>
                </View>
            </View>
            : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>}
    </View>
)
export default Layout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    bottomBox: {
        width: "100%",
        height: "30%",
        alignItems: 'center',
        backgroundColor: '#d3d3d3'
    },
    headerBox: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    headerText: {
        paddingVertical: 20
    },
    barcode: {
        width: "100%",
        paddingHorizontal: 10
    },
    bottomOverlay: {
        position: "absolute",
        width: "100%",
        flex: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
});
