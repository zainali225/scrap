
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Home from './src/screens/Home';
import SelectChannel from './src/screens/SelectChannel';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Streaming from './src/screens/Streaming';

const Stack = createStackNavigator();

const App = () => {



  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SelectChannel" component={SelectChannel} />
        <Stack.Screen name="Streaming" component={Streaming} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
