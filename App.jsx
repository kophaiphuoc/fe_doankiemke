import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from './src/screens/splashscreen/Splash';
import Login from './src/screens/login/Login';
import Dashboard from './src/screens/Dashboard/Dashboard';
import Inforuse from './src/screens/Inforuser/Inforuse';
import Stock from './src/screens/Stock/Stock';
import Listproduct from './src/screens/Listproduct/Listproduct';
import DetailProduct from './src/screens/DetailProduct/DetailProduct';
import Producer from './src/screens/Producer/Producer';
import DetailProduct2 from './src/screens/DetailProduct/DetailerProduct2';
import SearchCode from './src/inventory/SearchCode';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Dashboard"
          component={Dashboard}
        />
        <Stack.Screen
          options={{title: 'Account'}}
          name="Inforuse"
          component={Inforuse}
        />
        <Stack.Screen
          options={({route}) => ({
            title: route.params.id === 1 ? 'Kho Hàng' : 'Kiểm Kê',
          })}
          name="Stock"
          component={Stock}
        />
        <Stack.Screen
          options={{title: 'Nhà Sản Xuất'}}
          name="Producer"
          component={Producer}
        />
        <Stack.Screen
          options={{title: 'Kiểm kê'}}
          name="SearchCode"
          component={SearchCode}
        />
        <Stack.Screen
          options={({route}) => ({
            title:
              route.params.id === 1
                ? 'Dress'
                : route.params.id === 2
                ? 'Glass'
                : 'Hat',
          })}
          name="Listproduct"
          component={Listproduct}
        />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />

        <Stack.Screen name="DetailProduct2" component={DetailProduct2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
