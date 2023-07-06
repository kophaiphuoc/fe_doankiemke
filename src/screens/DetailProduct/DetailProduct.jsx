import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Deletebtn from '../../component/Deletebtn';
import Notisucess from '../../component/Notisucess';
import Editbtn from '../../component/Editbtn';
import ALL_API from '../../services/HandlerApi';

const DetailProduct = props => {
  const data = props.route.params?.data;
  const navigation = props.navigation;
  const route = props.route;
  const id = props.route.params?.data._id;

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const showToast = text => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.data.nameProduct,
      headerRight: () => (
        <View style={{display:'flex',flexDirection:'row',width:80,justifyContent:'space-around'}}>
          <Deletebtn funtionshow={showModal} />
          <Editbtn navigation = {navigation} data={data}></Editbtn>
        </View>
      ),
    });
  }, [navigation, route]);

  const deleteProduct = id => {
    ALL_API.DELETE_PRODUCT(id)
      .then(res => {
        if (res === 2) {
          showToast('Xóa sản phẩm thất bại');
          hideModal();
        } else {
          showToast('Xóa sản phẩm thành công');
          hideModal();
          navigation.goBack();
        }
      })
      .catch(e => {
        showToast('Xóa sản phẩm thành công');
        hideModal();
      });
  };

  return (
    <View style={{width: '100%', height: '100%', padding: 10}}>
      <ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomColor: '#f2efef',
            borderBottomWidth: 1,
            padding: 20,
          }}>
          <View>
            <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
              Mã sản phẩm
            </Text>
            <TextInput
              style={{
                fontSize: 12,
                fontWeight: '500',
                textAlign: 'center',
                marginTop: 5,
              }}>
              {data?.codeProduct}
            </TextInput>
          </View>
          <View>
            <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
              Mã loại hàng
            </Text>
            <TextInput
              style={{
                fontSize: 12,
                fontWeight: '500',
                textAlign: 'center',
                marginTop: 5,
              }}>
              {data?.codeTypeProduct}
            </TextInput>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: 'black',
              marginLeft: 20,
            }}>
            Tên sản phẩm
          </Text>
          <TextInput
            placeholder="Nhập tên sản phẩm"
            placeholderTextColor={'#B94FA8'}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#f2efef',
              textAlign: 'center',
              color: '#B94FA8',
            }}>
            {' '}
            {data?.nameProduct}
          </TextInput>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
            Nhà sản xuất
          </Text>
          <TouchableOpacity
            style={{
              width: 58,
              height: 23,
              borderWidth: 1,
              borderColor: '#B4343466',
              borderRadius: 50,
              backgroundColor:
                data?.producerProduct == 'HSK' ? '#B4343466' : null,
            }}>
            <Text style={{textAlign: 'center'}}>HSK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 58,
              height: 23,
              borderWidth: 1,
              borderColor: '#32A43D66',
              borderRadius: 50,
              backgroundColor:
                data?.producerProduct == 'MLL' ? '#32A43D66' : null,
            }}>
            <Text style={{textAlign: 'center'}}>MLL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 58,
              height: 23,
              borderWidth: 1,
              borderColor: '#1428D466',
              borderRadius: 50,
              backgroundColor:
                data?.producerProduct == 'OPX' ? '#1428D466' : null,
            }}>
            <Text style={{textAlign: 'center'}}>OPX</Text>
          </TouchableOpacity>
        </View>

        {modalVisible ? (
          <Notisucess
            onclick={hideModal}
            funtion={deleteProduct}
            title={'Xóa sản phẩm'}
            description={'Bạn chắc chắn muốn xóa sản phẩm này'}
            btn1={'Hủy'}
            btn2={'Xóa'}
            id={id}></Notisucess>
        ) : null}

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
            Kích thước
          </Text>
          <TouchableOpacity>
            <Text style={{textAlign: 'center', fontSize: 14, color: 'black'}}>
              S
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{textAlign: 'center', fontSize: 18, color: 'black'}}>
              M
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{textAlign: 'center', fontSize: 22, color: 'black'}}>
              L
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
              Số lượng
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                width: 70,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                height: 30,
              }}>
              <TouchableOpacity
                style={{
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
                  -
                </Text>
              </TouchableOpacity>
              <TextInput
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                }}>
                {data?.quantityProduct}
              </TextInput>
              <TouchableOpacity
                style={{
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
            Mô tả
          </Text>
          <View
            style={{
              width: '100%',
              height: 180,
              backgroundColor: '#EEEEEE',
              marginTop: 20,
            }}>
            <TextInput style={{width: '100%'}}>
              {data?.descriptionProduct}
            </TextInput>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
            PRICE
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
            {data?.quantityProduct + 7}$
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => editproduct()}
            style={{
              width: 101,
              height: 40,
              backgroundColor: '#001833',
              borderRadius: 18,
            }}>
            <Text
              style={{
                textAlign: 'center',
                lineHeight: 40,
                fontWeight: '800',
                color: 'white',
              }}>
              Lưu
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({});
