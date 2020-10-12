import React from 'react';
import { hot } from 'react-hot-loader/root';
import { HeaderLayout } from 'layouts/header';
import { ListaProductosContainer } from 'pods/productos';
import { PedidoGeneradoProvider } from 'common-app/pedido';

const App: React.FC = () => {
  return (
    <PedidoGeneradoProvider>
      <HeaderLayout></HeaderLayout>
      <ListaProductosContainer></ListaProductosContainer>
    </PedidoGeneradoProvider>
  );
};

export default hot(App);
