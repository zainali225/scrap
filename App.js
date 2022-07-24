
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import cricketHdHome from './src/screens/cricketHd/Home';
import cricketHdSelectChannel from './src/screens/cricketHd/SelectChannel';
import cricketHdStreaming from './src/screens/cricketHd/Streaming';

import freeStreamHome from './src/screens/freeStreams/Home';

import AppMenu from './src/screens'
import freeStreamStreaming from './src/screens/freeStreams/Streaming';
import PlayChannel from './src/screens/PlayChannel'

const Stack = createStackNavigator();


const cricketHdStack = () => (
  <>
    <Stack.Screen name="cHdHome" component={cricketHdHome} />
    <Stack.Screen name="cHdSelectChannel" component={cricketHdSelectChannel} />
    <Stack.Screen name="cHdStreaming" component={cricketHdStreaming} options={{ headerShown: false }} />
  </>
)
const freeStreamStack = () => (
  <>
    <Stack.Screen name="freeStreamHome" component={freeStreamHome} />
    <Stack.Screen name="freeStreamStreaming" component={freeStreamStreaming} />
  </>
)


const App = () => {



  return (
    <NavigationContainer >
      <Stack.Navigator>

        <Stack.Screen name="App" component={AppMenu} />

        {
          cricketHdStack()
        }
        {
          freeStreamStack()
        }

        <Stack.Screen name="PlayChannel" component={PlayChannel} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
