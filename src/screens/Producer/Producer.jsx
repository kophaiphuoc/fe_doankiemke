import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Producer = () => {
    const hsk = {
        title:'HSK',
        name:'Công ty TNHH HSK',
        phone:'+37533664-57-36',
        email:'hsk@gmail.com',
        adress:'38 Phan Đình Giót',
        imgqr:require('../../assets/hskqr.png')
    }
    const mll = {
        title:'MLL',
        name:'Công ty TNHH HSK',
        phone:'+37533664-57-36',
        email:'mll@gmail.com',
        adress:'81 Nguyễn Kiệm',
        imgqr:require('../../assets/mllqr.png')
    }
    const opx = {
        title:'OPX ',
        name:'Công ty TNHH HSK',
        phone:'+37533664-57-36',
        email:'opx@gmail.com',
        adress:'5/1D Linh Đông',
        imgqr:require('../../assets/opxqr.png')
    }  
  return (
    <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
      <View style={{width:'100%',height:'80%',alignItems:'center',justifyContent:'space-evenly'}}>
        <TouchableOpacity>
          <Image source={require('../../assets/hsk.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/mll.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/opx.png')}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Producer;

const styles = StyleSheet.create({});
