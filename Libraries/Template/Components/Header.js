import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

const Header = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require('../logo.png')}
      style={styles.backgroundLogo}
    />

    <Text style={styles.text}>Welcome to React Native</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 96,
    paddingBottom: 24,
    paddingHorizontal: 32,
    backgroundColor: '#F3F3F3',
  },
  backgroundLogo: {
    position: 'absolute',
    top: -20,
    left: -200,
    opacity: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    height: 540,
    width: 540,
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
})

export default Header
