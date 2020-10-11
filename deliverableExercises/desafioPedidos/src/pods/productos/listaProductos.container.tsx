import React from 'react';
import { ProductosComponent } from './listaProductos.component';
import { ProductoInfo } from './listaProductos.vm';
import { mapProductoInfoListFromApiToVm } from './listaProductos.mapper';
import { getproducto } from './api';

export const ListaProductosContainer: React.FC = () => {
  const [productos, setProductos] = React.useState<ProductoInfo[]>([]);

  const onLoadListaProductos = async () => {
    const apiProductos = await getproducto();
    const viewModelGallery = mapProductoInfoListFromApiToVm(apiProductos);
    const listaProductosDisplayed = viewModelGallery.filter(e =>
      setProductos(listaProductosDisplayed)
    );
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
