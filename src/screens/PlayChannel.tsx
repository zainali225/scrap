import { fetchAddress } from '@api/methods';
import { getCricketHdIframe } from '@services/helper';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';

type Props = {
    navigation: {},
    route: { params: { url: string } }
}

class PlayChannel extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount = async () => {
        let html = await fetchAddress(this.props.route.params.url)

        let iframe = getCricketHdIframe(html).replace(/\s/g, "%20")
        console.log('iframe: ', iframe);
        // this.setState({ loading: false, iframe: iframe })
        this.setState({ loading: false, iframe: iframe })
    };

    render() {
        return (
            <View style={{ flex: 1 }} >
                <Video
                    onError={e => alert(e.error.errorString)}

                    style={styles.backgroundVideo}
                    source={{ uri: "https://cdn2.crichd.pro/embed2.php?id=btsp1&q=BT%20Sport%201" }} />
            </View>
        );
    }
}

export default PlayChannel;

var styles = StyleSheet.create({
    backgroundVideo: {
        backgroundColor: "cyan",
        width: "100%",
        height: 500
    },
});
