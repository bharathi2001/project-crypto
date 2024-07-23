import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import { Provider } from 'react-redux';
import store from './store/store';
import StockTable from './table/StockTable';

function App() {
  return (
    <Provider store={store}>
      <StockTable />
    </Provider>
  );
}

export default App;
