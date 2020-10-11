import React from 'react';
import { ProductosComponent } from './listaProductos.component';
import { ProductoInfo } from './listaProductos.vm';
import { mapProductoInfoListFromApiToVm } from './listaProductos.mapper';
import { getProducto } from './api';

export const ListaProductosContainer: React.FC = () => {
  const [productos, setProductos] = React.useState<ProductoInfo[]>([]);
  const onLoadListaProductos = async () => {
    const apiProductos = await getProducto();
    const viewModelProductos = mapProductoInfoListFromApiToVm(apiProductos);
    const listaProductosDisplayed = viewModelProductos;
    setProductos(listaProductosDisplayed);
  };
  React.useEffect(() => {
    onLoadListaProductos();
  }, []);
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Mandalas </h1>
      <ProductosComponent productos={productos} />
    </>
  );
};
