import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import {Provider} from 'react-redux';
import Gallery from './src/Screens/Gallery';
import OnePhoto from './src/Screens/OnePhoto';
import {store} from './store';
const App: () => React$Node = () => {
  console.log(store);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen name="OnePhoto" component={OnePhoto} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
