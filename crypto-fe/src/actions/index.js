import axios from "axios";
import { setStockData, setLoading} from '../store/stockSlice'
export const url = "http://localhost:3005/";

export const getCryptoData = (symbol) => async (dispatch) => {
dispatch(setLoading(true));
const response = await axios.get(url + "cryptoData/"+ symbol);
if (response?.status === 200) {
    dispatch(setStockData(response.data));
} else {
    console.error("error")
}
dispatch(setLoading(false));
};
export const postCryptoData = (bodyData) => async (dispatch) => {
    const response = await axios.post(url + "cryptoData", bodyData.data);
    if (response?.status === 200) {
        dispatch(getCryptoData(bodyData.symbol));
    } else {
        console.error("error")
    }
};

export const fetchCryptoDataFromLivecoin = (symbol) => async (dispatch) => {
    const url = 'https://api.livecoinwatch.com/coins/list';
    const headers = {
      'content-type': 'application/json',
      'x-api-key': '47413255-f290-4974-a481-4e0930ac1a85',
    };
    const payload = {
      currency: 'USD',
      sort: 'rank',
      order: 'ascending',
      offset: 0,
      limit: 500,
      meta: false,
    };
  
    try {
      const response = await axios.post(url, payload, { headers });
      dispatch(setLoading(true));
      dispatch(postCryptoData({data:response.data, symbol:symbol}));
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
    }
  };