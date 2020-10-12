import React, { useState } from 'react';
import { ProductoInfo } from './listaProductos.vm';
import { Table, Radio, Divider, Form, Input, Select, Button } from 'antd';
import { PedidoGeneradoContext } from 'common-app/pedido';
import { CustomizedForm } from 'common/components/customForm';

interface Props {
  productos: ProductoInfo[];
}
const columns = [
  {
    title: 'Producto',
    dataIndex: 'descripcion',
    editable: false,
  },
  {
    title: 'Precio (€/m2)',
    dataIndex: 'importe',
    editable: true,
  },
];

export const ProductosComponent: React.FC<Props> = ({ productos }) => {
  const { updatingProgress, updatingPrice } = React.useContext(
    PedidoGeneradoContext
  );
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys : ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
      updatingProgress(Math.round((selectedRows.length * 100) / 6));
    },
  };

  const nuevoPrecio = function(record) {
    console.log('desde aqui vamos a actualizar el valor');
    //updatingPrice(record, 3);
  };

  const [fields, setFields] = React.useState([
    {
      name: ['Nuevo'],
      value: 1,
    },
  ]);

  return (
    <div>
      <CustomizedForm
        fields={fields}
        onChange={newFields => {
          setFields(newFields);
          console.log('valor del campo', newFields.value);
        }}
        className={'show'}
      />
      <Divider />

      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              nuevoPrecio(record);
            },
          };
        }}
        rowSelection={{
          ...rowSelection,
        }}
        columns={columns}
        dataSource={productos}
      />
    </div>
  );
};
