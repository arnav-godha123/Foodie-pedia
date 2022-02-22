import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { FlatList } from 'react-native-gesture-handler';

let customFonts = {
  JustAnotherHand: require('../assets/JustAnotherHand-Regular.ttf'),
  AveriaSansLibreBold: require('../assets/AveriaSansLibre-Bold.ttf'),
  AveriaSansLibre: require('../assets/AveriaSansLibre-Regular.ttf'),
};

export default class RecepieScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/bg4.jpg')}
          style={styles.backgroundImage}></ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
