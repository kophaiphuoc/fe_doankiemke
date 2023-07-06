import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import styles from './Login_css';
import ALL_API from '../../services/HandlerApi';
import Notierror from '../../component/Notierror';
const Login = props => {
  const {navigation} = props;
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loadding, setLoadding] = useState(false);
  const [vissable, setvissable] = useState(false);

  const checkLogin = async () => {
    setLoadding(true);
    const data = {
      email: username,
      password: password,
    };
    const request = await ALL_API.CHECK_LOGIN(data);
    if (request == 2) {
      setLoadding(false);
      setvissable(true);
    } else {
      setLoadding(false);
      navigation.navigate('Dashboard',{data:request});
    }
  };

  const clickvissable = () => {
    setvissable(false);
  };
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo_app.png')} />
      <View style={styles.Vtxtlogo}>
        <Text style={styles.txtlogo}>TECHNOLOGIES</Text>
      </View>
      <View style={styles.Vtxtinputlogin}>
        <TextInput
          placeholder="Email"
          onChangeText={text => setUsername(text)}
          placeholderTextColor={'#ededed'}
          style={styles.txtinputlogin}></TextInput>
        <TextInput
          placeholder="PassWord"
          onChangeText={text => setPassword(text)}
          placeholderTextColor={'#ededed'}
          style={styles.txtinputlogin}></TextInput>
      </View>
      <View style={styles.Vtxtforgot}>
        <Text style={styles.txtforgot}>Forgot password?</Text>
      </View>
      <View style={styles.Vcheckbox}>
        <CheckBox
          tintColors={{true: '#ffffff', false: '#ffffff'}}
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={styles.txtchecked}>Keep me signed in</Text>
      </View>
      <View style={styles.Vbtnlogin}>
        <TouchableOpacity style={styles.btnlogin} onPress={() => checkLogin()}>
          <Text style={styles.txtlogin}>Log in</Text>
        </TouchableOpacity>
      </View>
      {loadding ? <ActivityIndicator size="large" color="blue" /> : null}
      {vissable ? (
        <View style={{flex:1}}>
          <Notierror
            title={'Lỗi đăng nhập'}
            description={
              'Tài khoản hoặc mật khẩu chưa chính xác vui lòng thử lại !'
            }
            btn={'Thử lại'}
            onclick={clickvissable}></Notierror>
        </View>
      ) : null}
    </View>
  );
};

export default Login;
