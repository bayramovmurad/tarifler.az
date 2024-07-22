import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/context';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient;

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ContextProvider>
          <App />
        </ContextProvider>
      </Provider>
   </QueryClientProvider>
  </BrowserRouter>  
)
