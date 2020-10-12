import React from 'react';
import 'antd/dist/antd.css';
import './customForm.css';
import { Form, Input, Button } from 'antd';

export const CustomizedForm = ({ onChange, fields, className }) => {
  const mostrarValorInput = function() {
    return console.log('hola');
  };
  return (
    <Form
      name="global_state"
      layout="inline"
      fields={fields}
      className={className}
      onFieldsChange={(changedFields, allFields) => {
        onChange(allFields);
      }}
    >
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={mostrarValorInput}>
          Actualizar Precio
        </Button>
      </Form.Item>
      <Form.Item
        name="price"
        label="Nuevo precio"
        rules={[
          {
            required: true,
            message: 'Price is required!',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};
