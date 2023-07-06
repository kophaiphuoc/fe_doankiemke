import URLS from "../urls/AllUrl";
import callApi from "../axios/Axios";

const ALL_API = {
    CHECK_LOGIN: async data => {
      try {
        const urlLogin = URLS.LOGIN;
        const checkLogin = await callApi('POST', urlLogin, data);
        if (checkLogin.code == 200) {
          return checkLogin.data;
        } else {
          return 2;
        }
      } catch (error) {
        console.log(error);
        return 2;
      }
    },
    GET_LIST_TYPE_PRODUCT: async data => {
      try {
        const urlGetListProduct = URLS.GETLISTPRODUCT;
        const getListProduct = await callApi('GET', `${urlGetListProduct}${data}`,'');
        if (getListProduct.code == 200) {
          return getListProduct.mess
        } else {
          return 2;
        }
      } catch (error) {
        return 2;
      }
    },
    ADD_RPODUCT: async (data) => {
      try {
        const urlAddProduct = URLS.ADDPRODUCT;
        const resAddProduct = await callApi('POST', urlAddProduct, data);
        if (resAddProduct.code == 200) {
            return resAddProduct.mess
          } else {
            return 2;
          }
      } catch (error) {
        return 2;
      }
    },
    DELETE_PRODUCT: async id => {
      const data = {
        id:id
      }
      try {
        const urlDelete = URLS.DELETEPRODUCT;
        const resDelete = await callApi('POST',`${urlDelete}`,data);
        if (resDelete.code == 200) {
          return resDelete.code
        } else {
          return 2;
        }
      } catch (error) {
        return 2;
      }
    },
    EDIT_PRODUCT: async data => {
      const editUrl = URLS.EDITPRODUCT;
      try {
        const resEdit = await callApi('POST', editUrl, data);
        if (resEdit.code == 200) {
          return resEdit.code
        } else {
          return 2;
        }
      } catch (error) {
        return 2;
      }
    },
    FIND_PRODUCT: async code => {
      const findProduct = URLS.FINDPRODUCT;
      try {
        const resFind = await callApi('GET', `${findProduct}${code}`, '');
        if (resFind.code == 200) {
          return resFind.mess
        } else {
          return 2;
        }
      } catch (error) {
        return 2;
      }
    },
  };
  
  export default ALL_API;