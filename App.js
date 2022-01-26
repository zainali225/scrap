
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import Home from './src/screens/Home';
import SelectChannel from './src/screens/SelectChannel';
import Streaming from './src/screens/Streaming';

const Stack = createStackNavigator();

const App = () => {

 

  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SelectChannel" component={SelectChannel} />
        <Stack.Screen name="Streaming" component={Streaming} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
