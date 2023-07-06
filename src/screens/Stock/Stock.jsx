import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Stock = props => {
  const {navigation} = props;
  const id = props.route.params.id;
  const Data = [
    {
      id: 1,
      tittle: 'Dress',
      img: require('../../assets/dress.png'),
      description: 'Top barista',
      arrow: require('../../assets/arrow.png'),
    },
    {
      id: 2,
      tittle: 'Glass',
      img: require('../../assets/glass.png'),
      description: 'Top barista',
      arrow: require('../../assets/arrow.png'),
    },
    {
      id: 3,
      tittle: 'Hat',
      img: require('../../assets/hat.png'),
      description: 'Top barista',
      arrow: require('../../assets/arrow.png'),
    },
  ];

  const nextScreen = id => {
    switch (id) {
      case 1:
        navigation.navigate('Listproduct', {id, code: 'LH003', name: 'DRESS'});
        break;

      case 2:
        navigation.navigate('Listproduct', {id, code: 'LH002', name: 'GLASS'});
        break;

      default:
        navigation.navigate('Listproduct', {id, code: 'LH001', name: 'HAT'});
        break;
    }
  };

  const nextScreen2 = id => {
    switch (id) {
      case 1:
        navigation.navigate('SearchCode', {id, code: 'LH003', name: 'DRESS'});
        break;

      case 2:
        navigation.navigate('SearchCode', {id, code: 'LH002', name: 'GLASS'});
        break;

      default:
        navigation.navigate('SearchCode', {id, code: 'LH001', name: 'HAT'});
        break;
    }
  };

  const menu = Data.map((item, index) => (
    <TouchableOpacity
      onPress={() => {
        if (id === 3) {
          nextScreen2(item.id);
        } else {
          nextScreen(item.id);
        }
      }}
      key={item.id}
      style={{width: '100%', height: 150, marginTop: 20}}>
      <ImageBackground
        source={item.img}
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{width: '90%', alignItems: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
            {item.tittle}
          </Text>
          <Text style={{fontSize: 18, fontWeight: '400'}}>
            {item.description}
          </Text>
        </View>
        <Image source={item.arrow}></Image>
      </ImageBackground>
    </TouchableOpacity>
  ));
  return (
    <View style={{width: '100%', height: '100%', padding: 10}}>
      <View style={{width: '100%', height: '100%'}}>{menu}</View>
    </View>
  );
};

export default Stock;

const styles = StyleSheet.create({});
