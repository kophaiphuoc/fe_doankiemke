import {Image, Text, View, ImageBackground} from 'react-native';
import React from 'react';

const Inforuse = (props) => {
  const i4User = props.route.params.data
    const Data = [
        {
            id:1,
            img:require('../../assets/Profile.png'),
            infor:i4User?.username
        },
        {
            id:2,
            img:require('../../assets/Document.png'),
            infor:i4User?.numberPhone
        },
        {
            id:3,
            img:require('../../assets/Graph.png'),
            infor:i4User?.address
        },
        {
            id:4,
            img:require('../../assets/calendar.png'),
            infor:i4User?.email
        }
    ]
    const infor = Data.map((item,index)=>(
        <View key={item.id} style={{display:'flex',flexDirection:'row',marginTop:20}}>
            <Image source={item.img} style={{width:20}}></Image>
            <Text style={{width:'90%',marginLeft:10,fontSize:12,fontWeight:'400'}}>{item.infor}</Text>
        </View>
    ))
  return (
    <View style={{width:'100%',height:'100%',padding:10,backgroundColor:'#f2efef',alignItems:'center'}}>
      <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
        <ImageBackground source={require('../../assets/group.png')} style={{width:140,height:120,alignItems:'center',justifyContent:'center'}}>
          <Image source={require('../../assets/user_2.png')} style={{width:92,height:92,marginLeft:-18}} />
        </ImageBackground>
        <View>         
            <Text style={{fontSize:18,fontWeight:'600',color:'black'}}>{i4User?.username}</Text>
            <Text style={{fontSize:14,fontWeight:'300',color:'black'}}>User</Text>
            <Text style={{fontSize:14,fontWeight:'300',color:'black',textDecorationLine:'underline'}}>Change account</Text>
        </View>
      </View>
      <View style={{padding:10,marginTop:20,backgroundColor:'white',borderRadius:15,height:240,width:'90%'}}>
        <Text style={{fontSize:18,fontWeight:'600',color:'black'}}>Information</Text>
        {infor}
      </View>
    </View>
  );
};

export default Inforuse;
