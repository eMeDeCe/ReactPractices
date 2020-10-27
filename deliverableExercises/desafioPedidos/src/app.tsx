import React from 'react';
import { hot } from 'react-hot-loader/root';
import { HeaderLayout } from 'layouts/header';
import { PedidoGeneradoProvider } from 'common-app/pedido';
import { RouterComponent } from './core/router';

const App: React.FC = () => {
  return (
    <PedidoGeneradoProvider>
      <HeaderLayout></HeaderLayout>
      <RouterComponent />
    </PedidoGeneradoProvider>
  );
};

export default hot(App);
