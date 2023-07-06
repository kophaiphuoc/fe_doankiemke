import {View, Image, Text} from 'react-native';
import React from 'react';

import styles from './Splash_css';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo_app.png')} />
      <View style={styles.Vtxtlogo}>
        <Text style={styles.txtlogo}>TECHNOLOGIES</Text>
      </View>
    </View>
  );
};

export default Splash;
