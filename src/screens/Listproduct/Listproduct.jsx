import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import ALL_API from '../../services/HandlerApi';

const Listproduct = props => {
  const {navigation} = props;
  const code = props.route.params?.code;
  const name = props.route.params?.name;
  const [Data, setData] = useState([]);

  const nextScreen = item => {
    navigation.navigate('DetailProduct', {data: item});
  };

  const nextScreen2 = () => {
    navigation.navigate('DetailProduct2',{name});
  };

  useFocusEffect(
    useCallback(() => {
      ALL_API.GET_LIST_TYPE_PRODUCT(code).then(results => {
        try {
          if (results == 2) {
            console.log('call list product failde');
          } else {
            setData(results);
          }
        } catch (error) {
          console.error(error);
        }
      });
    }, []),
  );

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => nextScreen(item)}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-betweens',
        width: '100%',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
        padding: 10,
        alignItems: 'center',
      }}>
      <View style={{width: '90%', justifyContent: 'center'}}>
        <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>
          {item.nameProduct}
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', color: 'black'}}>
          {item.codeProduct}-{item.codeType}
        </Text>
      </View>
      <Text style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
        {item.quantityProduct}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{padding: 10}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#EEEEEE',
            width: '80%',
            paddingLeft: 10,
            borderRadius: 8,
          }}>
          <Image source={require('../../assets/search.png')}></Image>
          <TextInput
            placeholder="Search what you need"
            style={{color: 'black'}}></TextInput>
        </View>
        <TouchableOpacity
          onPress={() => nextScreen2()}
          style={{
            backgroundColor: '#619FFC',
            width: '18%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
          }}>
          <Image source={require('../../assets/add.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={{width: '100%', marginBottom: 20}}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item._id.toString()}
        />
      </View>
    </View>
  );
};

export default Listproduct;

const styles = StyleSheet.create({});
