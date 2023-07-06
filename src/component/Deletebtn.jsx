import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Deletebtn = (props) => {
    const {funtionshow} = props
  return (
    <View>
      <TouchableOpacity onPress={funtionshow}>
        <Image source={require('../assets/Delete.png')}></Image>
      </TouchableOpacity>
    </View>
  )
}

export default Deletebtn

const styles = StyleSheet.create({})