import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { fetchAddress, getChannelsMethod } from '@api/methods';
import colors from '../theme/colors';
import { cricketHdSelectChannelData } from '@services/helper';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [], loading: false, links: [], activeUrl: "",
        };
    }

    componentDidMount = async () => {
        this.setState({ loading: true })

        const channels = await getChannelsMethod()

        this.setState({ loading: false, channels })
    };


    navigate = (route) => {
        if (route)
            this.props.navigation.navigate(route)
    }

    onCardPress = async (url) => {


        const links = await cricketHdSelectChannelData(url)
        this.setState({ links, activeUrl: url })

    };

    navigateVideoPage = (url) => {
        this.props.navigation.navigate("PlayChannel", { url });
    };



    render() {


        const { channels, loading, links, activeUrl } = this.state

        const ItemCard = ({ item, onPress }) => {

            return (
                <View style={styles.itemCard} >
                    <TouchableOpacity onPress={onPress} >
                        <Text style={{ color: colors["dark"].TXT }} >{item.title}</Text>
                    </TouchableOpacity>
                    {
                        activeUrl == item.link &&
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }} >
                            {
                                links.map((link, key) =>
                                    <TouchableOpacity key={key}
                                        style={{ backgroundColor: colors["dark"].PICKER_ITEM_SELECTED, marginRight: 10, padding: 5 }}
                                        onPress={() => this.navigateVideoPage(link.url)}
                                    >
                                        <Text style={{ color: colors["dark"].TXT }} >Link {key + 1}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                    }
                </View>
            )
        }

        return (
            <View style={{ flex: 1, backgroundColor: colors["dark"].BG }} >


                {
                    loading && <ActivityIndicator color={colors["dark"].TXT} size="large" />
                }

                <ScrollView  >
                    <TouchableOpacity style={styles.appMenu} onPress={() => this.navigate("cHdHome")} >
                        <Text style={{ color: colors["dark"].TXT }} >cricHD  (SD)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.appMenu} onPress={() => this.navigate("freeStreamHome")} >
                        <Text style={{ color: colors["dark"].TXT }} >Free Streams  (HD)</Text>
                    </TouchableOpacity>

                    {
                        channels.map(item =>
                            <ItemCard onPress={() => this.onCardPress(item.link)} item={item} key={item.title} />
                        )
                    }
                </ScrollView>

            </View>
        );
    }
}

export default App;


const styles = {
    itemCard: { backgroundColor: colors["dark"].BTN, padding: 20, margin: 10, marginHorizontal: 20 },
    appMenu: {}
}