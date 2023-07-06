import {Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './Dashboard_css';
const Dashboard = props => {
  const {navigation} = props;
  const i4User = props.route.params.data;

  const nextScreenMenu1 = id => {
    switch (id) {
      case 1:
        navigation.navigate('Stock', { id });
        break;
  
      case 2:
        navigation.navigate('Producer', { id });
        break;
  
      default:
        navigation.navigate('Stock', { id });
        break;
    }
  };
  

  const nextScreenUser = () => {
    navigation.navigate('Inforuse', {data: i4User});
  };
  const Data = [
    {
      id: 1,
      title: 'Kho hàng',
      quantity: '300',
      quantity2: '',
      description: 'Item',
    },
    {
      id: 2,
      title: 'Nhà cung cấp',
      quantity: '3',
      quantity2: '',
      description: '',
    },
    {
      id: 3,
      title: 'Kiểm kê',
      quantity: '160',
      quantity2: '/300',
      description: '',
    },
  ];

  const Data2 = [
    {
      id: 1,
      title: 'Nhập kho',
      description:
        'Nhập mã hàng, số lượng hàng được nhập.Hệ thống sẽ xuất phiếu nhập kho',
      img: require('../../assets/2.png'),
    },
    {
      id: 2,
      title: 'Xuất kho',
      description:
        'Nhập mã hàng, số lượng hàng được xuất.Hệ thống sẽ xuất phiếu xuất kho',
      img: require('../../assets/3.png'),
    },
    {
      id: 3,
      title: 'Báo cáo',
      description: 'Báo cáo kiểm kê; Chi tiết phiếu nhập; Chi tiết phiếu xuất',
      img: require('../../assets/1.png'),
    },
  ];

  const menuStyles = [
    {backgroundColor: '#dad4fc', textColor: '#403572'},
    {backgroundColor: '#fcd8d6', textColor: '#FF5648'},
    {backgroundColor: '#9bdddd', textColor: '#479696'},
  ];

  const menuDashboard = Data.map((item, index) => (
    <TouchableOpacity
      key={item.id}
      onPress={()=>nextScreenMenu1(item.id)}
      style={[
        styles.submenu,
        {backgroundColor: menuStyles[index].backgroundColor},
      ]}>
      <Text style={[styles.txttitlemenu, {color: menuStyles[index].textColor}]}>
        {item.title}
      </Text>
      <Text style={[styles.txtquantity, {color: menuStyles[index].textColor}]}>
        {item.quantity}
        {item.quantity2}
      </Text>
      <Text
        style={[styles.txtdescription, {color: menuStyles[index].textColor}]}>
        {item.description}
      </Text>
    </TouchableOpacity>
  ));

  const menuDashboard2 = Data2.map((item, index) => (
    <TouchableOpacity
      key={item.id}
      style={{
        width: 292,
        height: 97,
        backgroundColor: menuStyles[index].backgroundColor,
        marginTop: 10,
        borderRadius: 15,
        padding: 15,
      }}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '500',
          color: menuStyles[index].textColor,
        }}>
        {item.title}
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{width: '90%', fontSize: 12, fontWeight: '300'}}>
          {item.description}
        </Text>
        <Image source={item.img}></Image>
      </View>
    </TouchableOpacity>
  ));
  return (
    <View style={styles.container}>
      <View style={styles.Vheader}>
        <Text style={styles.txtheader}>Inventory</Text>
        <TouchableOpacity
          style={styles.imguser}
          onPress={() => nextScreenUser()}>
          <Image source={require('../../assets/user.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.Vmenu}>{menuDashboard}</View>
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 15, color: 'black', fontWeight: '300'}}>
          Hoàn thành{' '}
          <Text style={{fontSize: 17, color: 'black', fontWeight: '900'}}>
            kiểm kê:{' '}
          </Text>
          <Text style={{fontSize: 14, color: '#C93F8D', fontWeight: '400'}}>
            50%
          </Text>
        </Text>
        <View
          style={{
            width: '100%',
            backgroundColor: '#e0d5db',
            height: 8,
            borderRadius: 5,
          }}>
          <View
            style={{
              width: '50%',
              backgroundColor: '#C93F8D',
              height: 8,
              borderRadius: 5,
            }}></View>
        </View>
      </View>
      <View style={styles.Vmenu2}>{menuDashboard2}</View>
    </View>
  );
};

export default Dashboard;
