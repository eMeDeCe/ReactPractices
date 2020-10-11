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
const data = [
  {
    key: '1',
    descripcion: 'John Brown',
    importe: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    descripcion: 'Jim Green',
    importe: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    descripcion: 'Joe Black',
    importe: 32,
    address: 'Sidney No. 1 Lake Park',
  },
]; // rowSelection object indicates the need for row selection

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
        dataSource={data}
      />
    </div>
  );
};
