import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Share, Linking } from 'react-native';
import SendIntentAndroid from 'react-native-send-intent';
import IntentLauncher, { IntentConstant } from 'react-native-intent-launcher'
import WebView from 'react-native-webview';

class Streaming extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iframe:  "https://123zcast.com/embed.php?player=desktop&v=sonysixendia&vw=100%&vh=520"
            // iframe: "https://firebasestorage.googleapis.com/v0/b/user-reg-a28c1.appspot.com/o/test%2F'Awaara'%20Video%20Song%20-%20Alone%20-%20Bipasha%20Basu%20-%20Karan%20Singh%20Grover.mp4?alt=media&token=4ac1e38d-ef17-4143-9a6d-aae55e2dbb07"
        };
    }

    playExternal = () => {
        const { iframe } = this.state
        // SendIntentAndroid.openAppWithData(
        //     "com.mxtech.videoplayer.ad",
        //   iframe,
        //    "video/*",

        // ).then(wasOpened => { });
        // SendIntentAndroid.openChooserWithOptions(
        //     {
        //         subject: "Video Title",
        //         videoUrl: iframe,
        //     },
        //     "Share video to"
        // );
        IntentLauncher.startActivity({
            action: IntentConstant.ACTION_VIEW,
            data: iframe,
            type: 'video/*'

        })

    }

    onNavigationStateChange = ({url}) => {
        console.log(url, new Date().toTimeString())

    }


    render() {

        const { iframe } = this.state
        return (
            <View style={{ flex: 1 }} >
                
                <WebView androidLayerType="hardware" androidHardwareAccelerationDisabled={true} mediaPlaybackRequiresUserAction={false} source={{ uri: iframe }} style={{ width: "100%", height: 100 }} onNavigationStateChange={this.onNavigationStateChange} />

            </View>
        );
    }
}

export default Streaming;
