import React from 'react';
import { ProductoInfo } from './listaProductos.vm';
import { Table, Radio, Divider } from 'antd';

interface Props {
  productos: ProductoInfo[];
}
const columns = [
  {
    title: 'Producto',
    dataIndex: 'descripcion',
  },
  {
    title: 'Precio (€/m2)',
    dataIndex: 'importe',
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

export const ProductosComponent: React.FC<Props> = ({ productos }) => {
  const [selectionType, setSelectionType] = React.useState('checkbox');
  return (
    <div>
      <Divider />

      <Table
        rowSelection={{
          ...rowSelection,
        }}
        columns={columns}
        dataSource={productos}
      />
    </div>
  );
};
