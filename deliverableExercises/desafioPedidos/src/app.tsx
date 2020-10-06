import React from 'react';
import { hot } from 'react-hot-loader/root';
import { HeaderLayout } from 'layouts/header';

const App: React.FC = () => {
  return (
    <HeaderLayout>
      <h1>Gestor de pedidos</h1>
    </HeaderLayout>
  );
};

export default hot(App);
