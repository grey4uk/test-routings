import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { GlobalStyle } from '../src/components/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from 'components/Loader/Loader';

const theme = {
  colors: {
    text: '#212121',
    black: '#000',
    white: '#fff',
    gray: '#707070',
    lightGray: '#f3f4f3',
    error: 'red',
    orange: '#ff7628',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="/test-routings/">
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
    <GlobalStyle />
  </React.StrictMode>
);
