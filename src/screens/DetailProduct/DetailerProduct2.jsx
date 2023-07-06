import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import Modal from 'react-native-modal';
import React, {useState} from 'react';
import ALL_API from '../../services/HandlerApi';
import Notisucess from '../../component/Notisucess';

const DetailProduct2 = props => {
  const data = props.route.params?.data;
  const navigation = props.navigation;
  const route = props.route;
  const name = data?.typeProduct || props.route.params?.name 
  const id = data?._id || ''

  const [producer, setProducer] = useState(data?.producerProduct || '');
  const [nameProduct, setnameProduct] = useState(data?.nameProduct || '');
  const [codeProduct, setcodeProduct] = useState(data?.codeProduct || '');
  const [codeTypeProduct, setcodeTypeProduct] = useState(
    data?.codeTypeProduct || '',
  );
  const [sizeProduct, setsizeProduct] = useState(data?.sizeProduct || '');
  const [quantityProduct, setquantityProduct] = useState(
    data?.quantityProduct || 0,
  );
  const [descriptionProduct, setdescriptionProduct] = useState(
    data?.descriptionProduct || '',
  );

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: data?.typeProduct ? 'Sửa sản phẩm' : 'Thêm sản phẩm',
    });
  }, [navigation, route]);

  const addProduct = (name) => {
    const data = {
      nameProduct: nameProduct,
      codeProduct: codeProduct,
      codeTypeProduct: codeTypeProduct,
      typeProduct: name,
      producerProduct: producer,
      sizeProduct: sizeProduct,
      quantityProduct: quantityProduct,
      descriptionProduct: descriptionProduct,
    };
    ALL_API.ADD_RPODUCT(data)
      .then(res => {
        if (res === 2) {
          showToast('thêm sản phẩm thất bại');
          hideModal();
        } else {
          showToast('thêm sản phẩm thành công');
          hideModal();
        }
      })
      .catch(e => {
        showToast('thêm sản phẩm thất bại');
        hideModal();
      });
  };

  const editproduct = () => {
    const data = {
      id: id,
      data: {
        nameProduct: nameProduct,
        codeProduct: codeProduct,
        codeTypeProduct: codeTypeProduct,
        typeProduct: name,
        producerProduct: producer,
        sizeProduct: sizeProduct,
        quantityProduct: quantityProduct,
        descriptionProduct: descriptionProduct,
      },
    };
    
    ALL_API.EDIT_PRODUCT(data)
      .then(res => {
        if (res === 2) {
          showToast('Sửa sản phẩm thất bại');
        } else {
          showToast('Sửa sản phẩm thành công');
          navigation.goBack();
        }
      })
      .catch(e => {
        showToast('Sửa sản phẩm thành công');
      });
  };

  const showToast = text => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  };

  const chooseProducer = data => {
    setProducer(data);
  };

  const chooseSize = data => {
    setsizeProduct(data);
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
              placeholder="Nhập mã sản phẩm"
              value={codeProduct}
              onChangeText={text => setcodeProduct(text)}
              style={{
                fontSize: 12,
                fontWeight: '500',
                textAlign: 'center',
                marginTop: 5,
              }}></TextInput>
          </View>
          <View>
            <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
              Mã loại hàng
            </Text>
            <TextInput
              value={codeTypeProduct}
              onChangeText={text => setcodeTypeProduct(text)}
              placeholder="Nhập mã loại hàng"
              style={{
                fontSize: 12,
                fontWeight: '500',
                textAlign: 'center',
                marginTop: 5,
              }}></TextInput>
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
            value={nameProduct}
            placeholder="Nhập tên sản phẩm"
            onChangeText={text => setnameProduct(text)}
            placeholderTextColor={'#B94FA8'}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#f2efef',
              textAlign: 'center',
              color: '#B94FA8',
            }}></TextInput>
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
            onPress={() => chooseProducer('HSK')}
            style={{
              width: 58,
              height: 23,
              borderWidth: 1,
              borderColor: '#B4343466',
              borderRadius: 50,
              backgroundColor: producer == 'HSK' ? '#B4343466' : null,
            }}>
            <Text style={{textAlign: 'center'}}>HSK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => chooseProducer('MLL')}
            style={{
              width: 58,
              height: 23,
              borderWidth: 1,
              borderColor: '#32A43D66',
              borderRadius: 50,
              backgroundColor: producer == 'MLL' ? '#32A43D66' : null,
            }}>
            <Text style={{textAlign: 'center'}}>MLL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => chooseProducer('OPX')}
            style={{
              width: 58,
              height: 23,
              borderWidth: 1,
              borderColor: '#1428D466',
              borderRadius: 50,
              backgroundColor: producer == 'OPX' ? '#1428D466' : null,
            }}>
            <Text style={{textAlign: 'center'}}>OPX</Text>
          </TouchableOpacity>
        </View>

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
          <TouchableOpacity onPress={() => chooseSize('S')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                color: sizeProduct == 'S' ? '#1ce519' : null,
              }}>
              S
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => chooseSize('M')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: sizeProduct == 'M' ? '#1ce519' : null,
              }}>
              M
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => chooseSize('L')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 22,
                color: sizeProduct == 'L' ? '#1ce519' : null,
              }}>
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
                keyboardType="numeric"
                onChangeText={text => setquantityProduct(text)}
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                }}>
                {quantityProduct}
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
            <TextInput
              value={descriptionProduct}
              onChangeText={text => setdescriptionProduct(text)}
              placeholder="Nhập miêu tả"
              style={{width: '100%'}}></TextInput>
          </View>
        </View>

        {modalVisible ? (
          <Notisucess
            onclick={hideModal}
            funtion={addProduct}
            title={'Thêm sản phẩm'}
            description={'Bạn chắc chắn muốn thêm sản phẩm này'}
            btn1={'Hủy'}
            btn2={'Thêm'}></Notisucess>
        ) : null}

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}></View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              if (data?._id) {
                editproduct();
              }else{
                showModal()
              }
             
            }}
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
              {data?._id ? 'Lưu' : 'Thêm'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailProduct2;

const styles = StyleSheet.create({});
