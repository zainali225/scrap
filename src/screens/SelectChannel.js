import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { fetchAddress, getCrickHdHomeMethod } from '../api/methods';
import { cricketHdSelectChannelData } from '../services/helper'

class SelectChannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [], loading: true, match: props.route.params
        };
    }
    async componentDidMount() {
        const { url } = this.state.match

        let html = await fetchAddress(url)

        html = cricketHdSelectChannelData(html)
        console.log('html: ', html);






        this.setState({ loading: false, results: html })
    }

    navigateVideoPage = (tag) => {
        this.props.navigation.navigate("Streaming", { url: tag.url })
    };


    render() {

        const { results, loading, match } = this.state
 

        return (
            <ScrollView>
                {
                    loading &&
                    <ActivityIndicator />
                }
                <Text style={{ textAlign: "center" }} >{match.title}</Text>
                {
                    results.map((tag, key) =>
                        <TouchableOpacity key={key} onPress={() => this.navigateVideoPage(tag)}  >
                            <Text style={styles.row} >{tag.title}</Text>
                        </TouchableOpacity>
                    )
                }
            </ScrollView>
        );
    }
}

export default SelectChannel;

const styles = StyleSheet.create({
    row: { marginVertical: 10, backgroundColor: "cyan", }
})
