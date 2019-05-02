import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Section = ({ title, description }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  description: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#444',
  },
})

export default Section
