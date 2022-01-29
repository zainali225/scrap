import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Share, Linking, ActivityIndicator } from 'react-native';
import SendIntentAndroid from 'react-native-send-intent';
import IntentLauncher, { IntentConstant } from 'react-native-intent-launcher'
import WebView from 'react-native-webview';
import { fetchAddress } from '@api/methods';
import { getCricketHdIframe, wp, hp } from '@services/helper';

class Streaming extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.route.params.url, iframe: "", loading: true
            // iframe: "https://firebasestorage.googleapis.com/v0/b/user-reg-a28c1.appspot.com/o/test%2F'Awaara'%20Video%20Song%20-%20Alone%20-%20Bipasha%20Basu%20-%20Karan%20Singh%20Grover.mp4?alt=media&token=4ac1e38d-ef17-4143-9a6d-aae55e2dbb07"
        };
    }

    componentDidMount = async () => {
        let html = await fetchAddress(this.state.url)

        let iframe = getCricketHdIframe(html).replace(/\s/g, "%20")
        console.log('iframe: ', iframe);
        // this.setState({ loading: false, iframe: iframe })
        this.setState({ loading: false, iframe: iframe })
    };


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

    onNavigationStateChange = ({ url }) => {
        const { iframe } = this.state

        console.log('= ', url === iframe);
        console.log('url === iframe: ', url, iframe);
        if (this.state.iframe === url) {
            // this.webViewRef.reload()
        }
        else {
            // this.webViewRef.stopLoading()
        }

    }


    render() {

        const { iframe, loading } = this.state
        return (

            loading ?
                <ActivityIndicator style={{ flex: 1, justifyContent: "center" }} />
                :
                <WebView
                    ref={ref => this.webViewRef = ref}
                    allowsFullscreenVideo
                    automaticallyAdjustContentInsets
                    
                    thirdPartyCookiesEnabled={false}
                    mediaPlaybackRequiresUserAction={false}
                    source={{ uri: iframe }} style={{ width: "100%", height: "100%" }}
                    onNavigationStateChange={this.onNavigationStateChange} />

        );
    }
}

export default Streaming;
