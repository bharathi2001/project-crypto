import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSymbol, selectStockData, selectStockSymbol, selectStockLoading } from '../store/stockSlice';
import { fetchCryptoDataFromLivecoin } from '../actions/index';
import ModalPopup from './ModalPopup';

const StockTable = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectStockData);
  const symbol = useSelector(selectStockSymbol);
  const loader = useSelector(selectStockLoading);
  const [value, setValue] = useState(false);
  const [symbolVal, setSymbolVal] = useState(symbol);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchCryptoDataFromLivecoin(symbol));
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);

    return () => clearInterval(interval);
  }, [symbol, dispatch]);

  const onModalClose = () => {
    dispatch(changeSymbol(symbolVal));
    setValue(false);
  };

  const handleOpen = () => {
    setValue(true);
  }

  console.log(symbol, data, loader);

  return (
    <div className='mx-5'>
      <div className="align-items-center text-center mt-5">
        <h1 className='text-secondary'>{symbol} Stock Prices</h1>
        <div className="input-group">
          <label class="input-group-text" for="inputGroupSelect01">Select Crypto</label>
          {loader ? <button className="btn btn-secondary" type="button" disabled>
            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            Loading...
          </button> :
            <button className='btn btn-secondary' onClick={handleOpen}>{symbol}</button>}
        </div>
      </div>
      {value &&
        <ModalPopup
          {...{
            title: 'Enter Value:',
            handleConfirm: () => onModalClose(),
            body:
              <select class="form-select" value={symbolVal} onChange={(e) => setSymbolVal(e.target.value)} >
                <option selected >BTC</option>
                <option value="ETH">ETH</option>
                <option value="DOGE">DOGE</option>
                <option value="ETH">ETH</option>
                <option value="SOL">SOL</option>
                <option value="BNB">BNB</option>
              </select>
          }}
        />}
      <table className='table table-striped mt-5 border'>
        <thead className='text-secondary'>
          <tr>
            <th>Code</th>
            <th>Cap</th>
            <th>volume</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={entry._id}>
              <td>{entry.code}</td>
              <td>{entry.cap}</td>
              <td>{entry.volume}</td>
              <td>{entry.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;

