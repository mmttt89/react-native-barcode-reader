import React from 'react';
import Layout from './Layout';

export default class BarcodeScanner extends React.Component {

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
            alert(`Barcode value is ${e.data}`);
        }
    }
    handleTorch = (value) => {
        if (value === true) {
            this.setState({ torchOn: false });
        } else {
            this.setState({ torchOn: true });
        }
    }
    handleCameraReady = () => {
        this.setState({
            isCameraReady: true,
        });
    }

    render() {
        const { torchOn, isCameraReady, barcode } = this.state;
        const { navigation } = this.props;
        return (
            <Layout
                torchOn={torchOn}
                isCameraReady={isCameraReady}
                barcode={barcode}
                navigation={navigation}
                onBarCodeRead={this.onBarCodeRead}
                handleTorch={this.handleTorch}
                handleCameraReady={this.handleCameraReady} />
        );
    }
}

