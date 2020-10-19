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
      /*console.log(
        `selectedRowKeys : ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );*/
      updatingProgress(Math.round((selectedRows.length * 100) / 6));
    },
  };

  const priceUpdating = {
    productoSeleccionado: {
      id: '-1',
      importe: -1,
    },
    nuevoPrecio: '',
  };

  const [] = React.useState();

  const [form] = Form.useForm();
  const nuevoHandler = function() {
    form
      .validateFields()
      .then(values => {
        priceUpdating.nuevoPrecio = values.price;
        updatingPrice(priceUpdating);
      })
      .catch(errorInfo => {
        console.log('Error');
      });
  };

  return (
    <div>
      <CustomizedForm
        //fields={fields}
        className={'show'}
        form={form}
        handlerPrice={nuevoHandler}
      />
      <Divider />

      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              priceUpdating.productoSeleccionado = {
                id: record.key,
                importe: record.importe,
              };
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
