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
  TextInput,
  TouchableOpacity,
  ScrollView,Linking
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Header, Card } from 'react-native-elements';
import Axios from 'axios';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { FlatList } from 'react-native-gesture-handler';

function HeaderImage() {
  return (
    <Image
      source={require('../assets/logo.png')}
      style={{ width: RFValue(80), height: RFValue(80), alignSelf: 'center' }}
    />
  );
}

let customFonts = {
  JustAnotherHand: require('../assets/JustAnotherHand-Regular.ttf'),
  AveriaSansLibreBold: require('../assets/AveriaSansLibre-Bold.ttf'),
  AveriaSansLibre: require('../assets/AveriaSansLibre-Regular.ttf'),
};
const APP_ID = 'd322123b';
const APP_KEY = 'c4f37c66207dee1b025491b0c875bad5';
export default class Recepies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      searchText: '',
      recipeData: [],
      trending: [
        'dosa',
        'noodles',
        'biryani',
        'chocolate',
        'cookies',
        'ice creams',
        'pizza',
        'sandwich',
        'wrap',
        'coffee',
        'tea',
      ],
      showCase: [],
      no: 0,
    };
  }
  async loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  getRandomTopOfRecipes = () => {
    var min = 0;
    var max = 11;
    var rand = min + Math.random() * (max - min);
    var ra = Math.round(rand);
    var showCase = this.state.trending[ra];
    alert(rand + ' ' + this.state.showCase);
    this.setState({
      showCase: showCase,
      no: this.state.no + 1,
    });
    alert(rand + ' ' + this.state.showCase);
  };
  getRecipes = async (search) => {
    const res = await Axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search}&type=video&key=AIzaSyDD5SUomz3HumfDcL1CilvLzVRveBIY4Tw`
    );
    //console.log(JSON.stringify(res.data));
    this.setState({ recipeData: res.data.items });
    console.log(this.state.recipeData);
  };
  componentDidMount() {
    this.loadFontsAsync();
  }

  keyExtractor = (item, index) => index.toString();
  renderItem = (item, index) => {
    // console.log(item.item.snippet);
    //console.log(typeof item);
    return (
      <Card>
        <TouchableOpacity
          style={{
            backgroundColor: '#febf8f',
            borderWidth: 3,
            borderRadius: 20,
            borderColor: 'maroon',
            width: 150,
            height: 150,
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'content',
          }}
          
          onPress={
            ()=>{
              Linking.openURL('https://www.easy-kids-recipes.com/recipe-links.html');
            }
          }
          
          >
          <Card.Image
            source={{
              uri: item['item']['snippet']['thumbnails']['default']['url'],
            }}
            style={{
              width: 150,
              height: 150,
            }}></Card.Image>
        </TouchableOpacity>
      </Card>
    );
  };
  // <Image
  //   source={item['item']['snippet']['thumbnails']['default']['url']}
  //   style={{ width: 100, height: 100, resizeMode: 'contain' }}
  // />
  // <Text>{item['item']['snippet']['title']}</Text>
  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={{ flex: 1, backgroundColor: '#ffcba4' }}>
          <SafeAreaView style={styles.droidSafeArea} />
          <StatusBar animated={true} backgroundColor="white" />
          <Header
            placement="left"
            leftComponent={<HeaderImage />}
            centerComponent={{
              text: 'RECIPES',
              style: {
                color: 'maroon',
                fontSize: RFValue(40),
                fontFamily: 'AveriaSansLibre',
                letterSpacing: 0.5,
                marginRight: 30,
              },
            }}
            backgroundColor="transparent"
            containerStyle={{ marginTop: -20 }}
            leftContainerStyle={{
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.searchBar}
              placeholder="  Search for a recipe"
              placeholderTextColor="brown"
              onChangeText={(value) => {
                this.setState({ searchText: value });
              }}
              value={this.state.searchText}
            />
            <AntDesign
              name="search1"
              size={24}
              color="maroon"
              onPress={() => {
                console.log(this.state.searchText);
                this.getRecipes(this.state.searchText);
              }}
            />
          </View>
          <Text>{this.state.showCase}</Text>
          <ScrollView>
            <FlatList
              data={this.state.recipeData}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              numColumns={2}
            />
          </ScrollView>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
    translucent: Platform.OS === 'android' ? true : false,
  },
  searchBar: {
    height: '100%',
    width: '80%',
    margin: RFValue(10),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'brown',
    borderRadius: 20,
    fontFamily: 'AveriaSansLibre',
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    height: 40,
    borderRadius: 20,
    margin: 10,
    borderColor: 'brown',
  },
});
