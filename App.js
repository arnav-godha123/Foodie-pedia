import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Welcome from './screens/Welcome';
import Recepies from './screens/recepies';
import RecepeScreen from './screens/recepeScreen';

export default class App extends React.Component {
  render() {
    return <Appcontainer />;
  }
}

const AppNavigator = createStackNavigator(    
  {
    Welcome: { screen: Welcome },
    Recepies: { screen: Recepies },
    RecepeScreen: { screen: RecepeScreen },
  }, 
  {
    initialRouteName: 'Welcome',
    headerMode: 'none',
    mode: 'modal',
  }
);

const Appcontainer = createAppContainer(AppNavigator);
