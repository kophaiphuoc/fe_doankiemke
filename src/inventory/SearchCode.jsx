import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import ALL_API from '../services/HandlerApi';

const SearchCode = props => {
  const name = props.route.params.name;
  const [code, setCode] = useState('');
  const [data, setData] = useState({});
  const findCode = () => {
    ALL_API.FIND_PRODUCT(code)
      .then(res => {
        setData(res);
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <View style={{alignItems: 'center', padding: 10}}>
      <Text style={{fontSize: 20, fontWeight: '400'}}>{name}</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          marginTop: 20,
        }}>
        <TextInput
          onChangeText={text => setCode(text)}
          value={code}
          style={{width: '80%', padding: 10, borderWidth: 1, borderRadius: 5}}
          placeholder="Nhập mã sản phẩm"></TextInput>
        <TouchableOpacity
          onPress={() => findCode()}
          style={{
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            width: '18%',
            backgroundColor: '#000000',
            borderRadius: 10,
          }}>
          <Image source={require('../assets/search2.png')}></Image>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: 301,
          height: 184,
          marginTop: 30,
          borderRadius: 10,
          borderWidth: 1,
          padding: 10,
          borderColor: '#d8d8d8',
        }}>
        <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
          Thông tin
        </Text>
        <View style={{paddingLeft: 20}}>
          <Text style={{marginTop: 10,fontSize:13}}>Mã loại hàng : {data?.codeProduct}</Text>
          <Text style={{marginTop: 10,fontSize:13}}>
            Mã mặt hàng : {data.codeTypeProduct}
          </Text>
          <Text style={{marginTop: 10,fontSize:13}}>Tên sản phẩm : {data?.nameProduct}</Text>
          <Text style={{marginTop: 10,fontSize:13}} keyboardType="numeric">Số lượng : {data?.quantityProduct}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: 102,
          height: 60,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
          borderRadius: 20,
        }}>
        <Text style={{fontSize: 16, fontWeight: '600', color: 'white'}}>
          Lưu
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchCode;

const styles = StyleSheet.create({});
