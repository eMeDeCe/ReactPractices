import React from 'react';
import { hot } from 'react-hot-loader/root';
import { HeaderLayout } from 'layouts/header';
import { ListaProductosContainer } from 'pods/productos';

const App: React.FC = () => {
  return (
    <HeaderLayout>
      <ListaProductosContainer></ListaProductosContainer>
    </HeaderLayout>
  );
};

export default hot(App);
