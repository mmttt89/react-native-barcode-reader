import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { RNCamera } from "react-native-camera";
export default class BarcodeScanner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      torchOn: false,
      isCameraReady: false,
      barcode: {
        data: '',
        type: ''
      }
    }
  }
  onBarCodeRead = (e) => {
    const { barcode } = this.state;
    if (barcode.data !== e.data || barcode.type !== e.type) {
      let barcode = { data: e.data, type: e.type }
      this.setState({ barcode });
      alert("Barcode value is" + e.data, "Barcode type is" + e.type);
    }
  }
  handleTourch = (value) => {
    if (value === true) {
      this.setState({ torchOn: false }, () => console.log(">>>>>>>>", this.state.torchOn));
    } else {
      this.setState({ torchOn: true }, () => console.log(">>>>>>>>", this.state.torchOn));
    }
  }
  handleCameraReady = () => {
    this.setState({
      isCameraReady: true,
    });
  }

  render() {
    const { torchOn, isCameraReady, barcode } = this.state;
    return (
      <View style={styles.container}>
        <RNCamera
          onCameraReady={this.handleCameraReady}
          onBarCodeRead={this.onBarCodeRead}
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          flashMode={(isCameraReady && torchOn) ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off}
          ref={cam => this.camera = cam}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          captureAudio={false}
        >
          <View style={styles.bottomBox}>
            <View style={styles.headerBox}>
              <Text style={styles.headerText}>BARCODE SCANNER</Text>
            </View>
            <View style={styles.barcode}>
              <Text style={{ marginBottom: 5 }}>BARCODE DATA: {barcode.data}</Text>
              <Text style={{ marginBottom: 5 }}>BARCODE TYPE: {barcode.type}</Text>
            </View>
          </View>
        </RNCamera>
        <View style={styles.bottomOverlay}>
          <TouchableOpacity onPress={() => this.handleTourch(torchOn)}>
            <Text style={[styles.torchIcon, { marginLeft: 20, color: "white" }]}>
              {torchOn ? "On" : "Off"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  bottomBox: {
    width: "100%",
    height: "30%",
    alignItems: 'center',
    backgroundColor: '#d3d3d3'
  },
  headerBox: {
    width: "100%",
    justifyContent: 'center',
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
  torchIcon: {
    margin: 5,
    height: 40,
    width: 40
  },
  bottomOverlay: {
    position: "absolute",
    width: "100%",
    flex: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
});
