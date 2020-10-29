import React, { useState, useEffect } from 'react';
import { ProductoInfo } from './listaProductos.vm';
import { Table, Divider, Form } from 'antd';
import { PedidoGeneradoContext } from 'common-app/pedido';
import { CustomizedForm } from 'common/components/customForm';
import './style.css';

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
    nuevoPrecio: 0,
  });

  const [displayForm, setDisplayForm] = useState(false);
  const [form] = Form.useForm();
  const nuevoHandler = function() {
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

  const calculateTotal = function() {
    let a = 0;
    productos.forEach(element => {
      if (element.key === priceUpdating.productoSeleccionado.id) {
        element.importe = priceUpdating.nuevoPrecio;
      }
      a = a + element.importe;
    });
    return a;
  };
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(calculateTotal);
    updatingTotal(total);
  }, [priceUpdating.nuevoPrecio, total, productos]);

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
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        dataSource={productos}
      >
        <Column title="Producto" dataIndex="descripcion" key="description" />
        <Column
          title="Precio (€/m2)"
          dataIndex="importe"
          key="precio"
          className="price"
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
