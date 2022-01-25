import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { fetchAddress, getCrickHdHomeMethod } from '../api/methods';

class SelectChannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: [], loading: true
        };
    }
    async componentDidMount() {
        const link = this.props.route.params.link

        let home = await fetchAddress(this.props.route.params.link)

        let aTags = home.match(/<tr.*tr>/g)
        let links = aTags = aTags.filter(i => i.includes("Watch"))
        console.log('links: ', links);


        links = links.map(aTag => {
            let title = aTag.match(/>[a-zA-Z/d\s\d]+/g)[0]
            let link = aTag.match(/https:[a-z.\/-\d]+/g)[0]

            return {
                title,
                link
            }

        })

        console.log('link: ', link + "=====");

        this.setState({ home: links, loading: false })
    }

    navigateVideoPage = (tag) => { 
        this.props.navigation.navigate("Streaming", { link: tag.link })
    };


    render() {

        const { home, loading } = this.state
        return (
            <ScrollView>
                <Text>{home.length}</Text>
                <Text>{String(loading)}</Text>
                {
                    home.map((tag, key) =>
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
