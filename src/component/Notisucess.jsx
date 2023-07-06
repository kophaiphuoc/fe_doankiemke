import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

const Notisucess = props => {
  const {onclick,funtion,title,description,btn1,btn2,id} = props;
  return (
    <View>
      <Modal isVisible={true} style={{alignItems: 'center'}}>
        <View style={{width: 260, height: 185, alignItems: 'center',backgroundColor:'white',justifyContent:'center',borderRadius:20}}>
          <View>
            <Text style={{color:'black',fontWeight:'700',fontSize:20,textAlign:'center'}}>{title}</Text>
            <Text style={{color:'black',fontWeight:'400',fontSize:12,textAlign:'center',marginTop:10}}>{description}</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row',justifyContent:'space-around',width:'100%',marginTop:40}}>
          <TouchableOpacity
              style={{backgroundColor: '#D0C9C9', width: 104, height: 42,alignItems:'center',justifyContent:'center',borderRadius:10}}
              onPress={onclick}>
              <Text style={{color:'white',fontWeight:'600',fontSize:17}}>{btn1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: '#D0C9C9', width: 104, height: 42,alignItems:'center',justifyContent:'center',borderRadius:10}}
              onPress={()=>funtion(id)}>
              <Text style={{color:'black',fontWeight:'600',fontSize:17}}>{btn2}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Notisucess;

const styles = StyleSheet.create({});
