import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getCrickHdHomeMethod } from '../api/methods';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: [], loading: true
        };
    }
    async componentDidMount() {
        let home = await getCrickHdHomeMethod()

        let aTags = home.match(/<a[\s\da-zA-Z=":/.\-><]*a>/g)
        let links = aTags = aTags.filter(i => i.includes("Watch"))
        links = links.map(aTag => {
            let title = aTag.match(/title="[\s\da-zA-Z=:/.\-><]*/g)[0].replace(`title="`, "")
            let link = aTag.match(/https:.*title/g)[0].replace(`" title`, "")

            return {
                title,
                link
            }

        })
        console.log('links: ', links);


        this.setState({ home: links, loading: false })
    }

    navigateSelectChannel = (tag) => {

        this.props.navigation.navigate("SelectChannel",tag)
    };

    render() {

        const { home, loading } = this.state
        return (
            <ScrollView>
                <Text>{home.length}</Text>
                <Text>{String(loading)}</Text>
                {
                    home.map((tag, key) =>
                        <TouchableOpacity key={key} style={styles.row} onPress={() => this.navigateSelectChannel(tag)}  >
                            <Text key={key}  >{tag.title}</Text>
                        </TouchableOpacity>
                    )
                }
            </ScrollView>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    row: { marginVertical: 10, backgroundColor: "cyan", }
})
