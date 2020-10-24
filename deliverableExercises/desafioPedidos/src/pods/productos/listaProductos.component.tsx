import React, { useState, useEffect } from 'react';
import { ProductoInfo } from './listaProductos.vm';
import { Table, Radio, Divider, Form, Input, Select, Button } from 'antd';
import { PedidoGeneradoContext } from 'common-app/pedido';
import { CustomizedForm } from 'common/components/customForm';

interface Props {
  productos: ProductoInfo[];
}

export const ProductosComponent: React.FC<Props> = ({ productos }) => {
  const { updatingProgress, updatingTotal } = React.useContext(
    PedidoGeneradoContext
  );
  const [priceUpdating, setPriceUpdating] = useState({
    productoSeleccionado: {
      id: '-1',
      importe: -1,
    },
    nuevoPrecio: 1,
  });

  const [displayForm, setDisplayForm] = useState(false);
  const [form] = Form.useForm();
  const nuevoHandler = function () {
    form
      .validateFields()
      .then(values => {
        setPriceUpdating({ ...priceUpdating, nuevoPrecio: values.price });
        setDisplayForm(false);
      })
      .catch(errorInfo => {
        console.log('Error');
      });
  };

  const newPrice = function (record) {
    setPriceUpdating({
      ...priceUpdating,
      productoSeleccionado: {
        id: record.key,
        importe: record.importe,
      },
    });
    setDisplayForm(true);
  };
  const createForm = function () {
    return (
      <CustomizedForm
        className={!displayForm ? 'hidden' : 'show'}
        form={form}
        handlerPrice={nuevoHandler}
      />
    );
  };

  const [total, setTotal] = useState(1);
  useEffect(() => {
    let a = 0;
    productos.forEach(element => {
      if (element.key === priceUpdating.productoSeleccionado.id) {
        element.importe = priceUpdating.nuevoPrecio;
      }
      a = a + element.importe;
    });
    setTotal(a);
  }, [priceUpdating.nuevoPrecio]);

  useEffect(() => {
    updatingTotal(total);
    //console.log(total);
  }, [total]);


  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      updatingProgress(Math.round((selectedRows.length * 100) / 6));
    },
  };

  const { Column } = Table;

  return (
    <div>
      <Divider />
      {createForm()}
      <Table dataSource={productos} rowSelection={{ ...rowSelection }}>
        <Column title="Producto" dataIndex="descripcion" key="description" />
        <Column
          title="Precio (€/m2)"
          dataIndex="importe"
          key="precio"
          onCell={(record, rowIndex) => {
            return {
              onClick: event => {
                newPrice(record);
                form.resetFields();
              },
            };
          }}
        />
      </Table>
    </div>
  );
};
