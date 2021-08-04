import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMap extends React.Component {
    constructor(){
    super()
    this.state={
      latitude:"",
      longitude:""
    }
  }
  render() {
    const { latitude, longitude } = this.state;
    const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`;
    //console.log(this.state.longitude,this.state.latitude);
    return (
      <View style={styles.container}>
        <SafeAreaView styles={styles.androidSafeArea} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}> Star Map </Text>
        </View>
        <View style={styles.subContainer}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter your longitude"
            placeholderTextColor="#fff"
            onChangeText={(text) => {
              this.setState({
                longitude: text,
              });
            }}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter your latitude"
            placeholderTextColor="#fff"
            onChangeText={(text) => {
              this.setState({
                latitude: text,
              });
            }}
          />
        </View>
        <WebView
          scalesPageToFit={true}
          source={{ uri: path }}
          style={{ marginTop: 20, marginBottom: 20 }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a0023',
  },
  androidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  subContainer: {
    flex: 0.6,
  },
  inputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    textAlign: 'center',
    color: 'white',
    width: 200,
    alignSelf: 'center',
  },
});
