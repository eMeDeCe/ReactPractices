import React from 'react';
import 'antd/dist/antd.css';
import './customForm.css';
import { Form, Input, InputNumber, Button } from 'antd';
interface FormProps {
  className: string;
  form: {};
  handlerPrice(): void;
}

export const CustomizedForm = FormProps => {
  const checkPrice = (rule, value) => {
    if (value > 0) {
      return Promise.resolve();
    }
    return Promise.reject('El precio debe ser mayor que 0');
  };

  return (
    <Form
      form={FormProps.form}
      name="global_state"
      layout="inline"
      className={FormProps.className}
    >
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          onClick={FormProps.handlerPrice}
        >
          Actualizar Precio
        </Button>
      </Form.Item>
      <Form.Item
        name="price"
        label="Nuevo precio"
        rules={[
          {
            validator: checkPrice,
          },
        ]}
      >
        <InputNumber min={1} max={1000} />
      </Form.Item>
    </Form>
  );
};
