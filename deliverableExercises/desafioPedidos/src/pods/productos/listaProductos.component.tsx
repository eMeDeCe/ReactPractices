import React, { useState, useEffect } from 'react';
import { ProductoInfo } from './listaProductos.vm';
import { Table, Radio, Divider, Form, Input, Select, Button } from 'antd';
import { PedidoGeneradoContext } from 'common-app/pedido';
import { CustomizedForm } from 'common/components/customForm';

interface Props {
  productos: ProductoInfo[];
}

export const ProductosComponent: React.FC<Props> = ({ productos }) => {
  const { updatingProgress, updatingPrice } = React.useContext(
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
  const nuevoHandler = function() {
    form
      .validateFields()
      .then(values => {
        setPriceUpdating({ ...priceUpdating, nuevoPrecio: values.price });
        //priceUpdating.nuevoPrecio = values.price;
        setDisplayForm(false);
        console.log('hola');
      })
      .catch(errorInfo => {
        console.log('Error');
      });
  };

  const newPrice = function(record) {
    setPriceUpdating({
      ...priceUpdating,
      productoSeleccionado: {
        id: record.key,
        importe: record.importe,
      },
    });
    setDisplayForm(true);
  };
  const createForm = function() {
    return (
      <CustomizedForm
        className={!displayForm ? 'hidden' : 'show'}
        form={form}
        handlerPrice={nuevoHandler}
      />
    );
  };

  useEffect(() => {
    updatingPrice(priceUpdating);
  }, [priceUpdating.nuevoPrecio]);

  const { Column } = Table;

  return (
    <div>
      <Divider />
      {createForm()}
      <Table dataSource={productos}>
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
