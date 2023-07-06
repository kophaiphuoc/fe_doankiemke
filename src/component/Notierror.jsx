import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

const Notierror = (props) => {
  const {btn,title,description,onclick} = props
  return (
    <View>
      <Modal isVisible={true} style={{alignItems: 'center'}}>
        <View style={{height: 370, width: '90%', backgroundColor: '#FFFFFF',alignItems:"center",borderRadius:30}}>
          <View style={{width:130,height:130,backgroundColor:'#FFEBEB',borderRadius:90,marginTop:25,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontWeight:'900',fontSize:90,color:'red'}}>!</Text>
          </View>
          <Text style={{color:'black',fontSize:15,marginTop:20,fontWeight:'600'}}>{title}</Text>
          <Text style={{color:'black',fontSize:15,textAlign:'center',marginTop:10,color:'grey',fontWeight:'300',width:'70%'}}>{description}</Text>
          <TouchableOpacity onPress={onclick} style={{width:'70%',marginTop:20,backgroundColor:'red',height:55,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white',fontSize:18,fontWeight:'600'}}>{btn}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Notierror;

const styles = StyleSheet.create({});
