import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CustomProvider } from 'rsuite';
import { Layout } from 'components/Layout';
import 'rsuite/dist/rsuite.min.css';

function App() {
  return (
    <CustomProvider theme="light">
        <Layout />
    </CustomProvider>
  );
}

export default App;
