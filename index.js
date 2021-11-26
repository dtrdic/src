import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { getInitialData } from './actions/networkCalls';
import './index.css';
import App from './App';
import configureStore from './configureStore';

const store = configureStore();
store.dispatch(getInitialData());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
