import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getCrickHdHomeMethod } from '../api/methods';
import { cricketHdHomeData, } from '../services/helper';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: [], loading: true
        };
    }
    async componentDidMount() {
        let html = await getCrickHdHomeMethod()

        let home = cricketHdHomeData(html)

        // console.log('links: ', links);


        this.setState({ home, loading: false })
    }

    navigateSelectChannel = (tag) => {

        this.props.navigation.navigate("SelectChannel", tag)
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
