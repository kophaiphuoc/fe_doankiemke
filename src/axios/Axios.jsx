import axios from 'axios';

const callApi = async (method, url,data) => {
    console.log(method,data,url)
    const options = {
        method: method,
        url: url,
        data
    };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log(error)
        return error.request

    }
}

export default callApi