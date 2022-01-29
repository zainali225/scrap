

import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { freeStreamsHomeData, } from '@services/helper';
import { fetchAddress } from '@api/methods';
import paths from '@api/paths';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeData: [], loading: true
        };
    }
    async componentDidMount() {
        let html = await fetchAddress(paths.freeStreamsHome)

        let home = freeStreamsHomeData(html)



        this.setState({ homeData: home, loading: false })
    }

    navigateStreaming = (channel) => {

        this.props.navigation.navigate("freeStreamStreaming", channel)
    };

    render() {

        const { homeData, loading } = this.state
        return (
            <ScrollView>
                <Text>{String(loading)}</Text>
                {
                    homeData.map((tag, key) =>
                        <View key={key} style={styles.row}   >
                            <Text key={key}  >{tag.title}</Text>
                            <View   >
                                {
                                    tag.urls.map((channel, key) => (
                                        <TouchableOpacity onPress={() => this.navigateStreaming(channel)} key={key} style={styles.btn} >
                                            <Text key={key}  >{channel.title}</Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        </View>
                    )
                }
            </ScrollView>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    row: { marginVertical: 10, backgroundColor: "cyan", justifyContent: "space-between", flexDirection: "row", padding: 20, margin: 20 },
    btn: { backgroundColor: "#ddd", padding: 10, margin: 5 }
})
