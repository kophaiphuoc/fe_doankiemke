import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Editbtn = (props) => {
    const {navigation,data} = props
    const nextEditScreen = () =>{
        navigation.navigate('DetailProduct2', {data: data});
    }
  return (
    <View>
    <TouchableOpacity onPress={()=>nextEditScreen()}>
      <Image source={require('../assets/edit.png')}></Image>
    </TouchableOpacity>
  </View>
  )
}

export default Editbtn

const styles = StyleSheet.create({})