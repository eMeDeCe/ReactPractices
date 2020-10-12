import React from 'react';
import { ProductoInfo } from './listaProductos.vm';
import { Table, Radio, Divider, Form, Input, Select, Button } from 'antd';

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

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
  },
};

const nuevoPrecio = function(record) {
  console.log('desde aqui vamos a actualizar el valor');
};

export const ProductosComponent: React.FC<Props> = ({ productos }) => {
  const [selectionType, setSelectionType] = React.useState('checkbox');
  return (
    <div>
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
