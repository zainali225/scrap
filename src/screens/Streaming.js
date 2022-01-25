import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Share, Linking } from 'react-native';
import SendIntentAndroid from 'react-native-send-intent';

class Streaming extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // iframe: "https://s1.123zcast.com:8050/hls/eurosp1.m3u8"
            // iframe: "https://firebasestorage.googleapis.com/v0/b/user-reg-a28c1.appspot.com/o/test%2F'Awaara'%20Video%20Song%20-%20Alone%20-%20Bipasha%20Basu%20-%20Karan%20Singh%20Grover.mp4?alt=media&token=4ac1e38d-ef17-4143-9a6d-aae55e2dbb07"
        };
    }

    playExternal = () => {
        const { iframe } = this.state
        SendIntentAndroid.openAppWithData(
            "com.mxtech.videoplayer.ad",
          iframe,
           "video/*",
             
        ).then(wasOpened => { });

    }


    render() {
        return (
            <TouchableOpacity onPress={this.playExternal} >
                <Text>Share  </Text>
            </TouchableOpacity>
        );
    }
}

export default Streaming;
