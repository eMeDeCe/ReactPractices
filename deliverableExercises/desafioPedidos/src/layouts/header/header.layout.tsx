import React from 'react';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { PageHeader, Descriptions, Button, Progress } from 'antd';
import './header.layaut.css';

const rightNow = new Date();
const date = rightNow
  .toISOString()
  .slice(0, 10)
  .replace(/-/g, '/');

function generalDatas({ cliente, numeroCliente, fechaCreacion }) {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title=" Número de pedido:"
        subTitle={numeroCliente}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Fecha">{date}</Descriptions.Item>
          <Descriptions.Item label="Cliente">
            <a>{cliente}</a>
          </Descriptions.Item>
          <Descriptions.Item label="Fecha de alta">
            {fechaCreacion}
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </div>
  );
}

function actSend(send) {
  return send ? (
    <Button key="1" type="primary"></Button>
  ) : (
    <Button key="3">Enviar</Button>
  );
}

function progress(stateProgess) {
  return <Progress type="circle" percent={stateProgess} />;
}

function total(totalPedido) {
  return (
    <Descriptions.Item label="Total del Pedido">
      <a>{totalPedido}</a>
    </Descriptions.Item>
  );
}

const MemoizedGeneralDatas = React.memo(generalDatas);

export const HeaderLayout: React.FC = ({ children }) => (
  <>
    <MemoizedGeneralDatas
      cliente="Mandalas"
      numeroCliente="0001"
      fechaCreacion="1986/01/07"
    />
    {children}
  </>
);
