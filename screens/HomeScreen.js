import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreastyle} />
        <ImageBackground
          source={require('../assets/stars.gif')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Image source={require('../assets/main-icon.png')} style={styles.mainIcon}/>
            <Text style={styles.titleText}> Stellar App </Text>
          </View>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('DailyPic')}>
            <Text style={styles.routeText}> Daily Pictures </Text>
            <Text style={styles.knowMore}> {'Know More...'} </Text>
            <Text style={styles.bgDigit}> 1 </Text>
            <Image
              source={require('../assets/daily_pictures.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('SpaceCraft')}>
            <Text style={styles.routeText}> Space   Craft  </Text>
            <Text style={styles.knowMore}> {'Know More...'} </Text>
            <Text style={styles.bgDigit}> 2 </Text>
            <Image
              source={require('../assets/space_crafts.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('StarMap')}>
            <Text style={styles.routeText}>  Star       Map </Text>
            <Text style={styles.knowMore}> {'Know More...'} </Text>
            <Text style={styles.bgDigit}> 3 </Text>
            <Image
              source={require('../assets/star_map.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreastyle: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white',
    width: 200,
    height: 200,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  routeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    marginBottom: 30,
  },
  knowMore: {
    paddingLeft: 30,
    color: 'red',
    fontSize: 15,
  },
  bgDigit: {
    position: 'absolute',
    color: 'rgba(183, 183, 183, 0.5)',
    fontSize: 80,
    right: -10,
    bottom: -10,
    zIndex: -1,
  },
  iconImage: {
    position: 'absolute',
    height: 70,
    width: 70,
    resizeMode: 'contain',
    right: -20,
    top: -30,
  },
  mainIcon:{
    width:300,
    height:250,
  }
});
