import React from 'react';
import { ProductosComponent } from './listaProductos.component';
import { ProductoInfo } from './listaProductos.vm';
import { mapProductoInfoListFromApiToVm } from './listaProductos.mapper';
import { getProducto } from './api';
import { CustomizedForm } from 'common/components/customForm';

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

  const [fields, setFields] = React.useState([
    {
      name: ['Nuevo'],
      value: 1,
    },
  ]);
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Mandalas </h1>
      <CustomizedForm
        fields={fields}
        onChange={newFields => {
          setFields(newFields);
        }}
        className={'show'}
      />
      <ProductosComponent productos={productos} />
    </>
  );
};
