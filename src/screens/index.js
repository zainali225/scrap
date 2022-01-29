import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "@services/styles"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    navigate = (route) => {
        if (route)
            this.props.navigation.navigate(route)
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.appMenu} onPress={() => this.navigate("cHdHome")} >
                    <Text >cricHD  (SD)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.appMenu} onPress={() => this.navigate("freeStreamHome")} >
                    <Text >Free Streams  (HD)</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default App;
