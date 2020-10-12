import React from 'react';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { PageHeader, Descriptions, Button, Progress } from 'antd';
import './header.layaut.css';
import { PedidoGeneradoContext } from 'common-app/pedido';

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
  if (send < 100) {
    return <Button key="3">Enviar</Button>;
  } else {
    return (
      <Button key="1" type="primary">
        Enviar
      </Button>
    );
  }
}

function progress(stateProgess) {
  return <Progress type="circle" percent={stateProgess} />;
}

function total(totalPedido) {
  return (
    <Descriptions size="small" column={3}>
      <Descriptions.Item label="Total del Pedido">
        <a>{totalPedido}</a>
      </Descriptions.Item>
    </Descriptions>
  );
}

const MemoizedGeneralDatas = React.memo(generalDatas);

export const HeaderLayout: React.FC = () => {
  const updatingProgress = React.useContext(PedidoGeneradoContext);
  updatingProgress.progress < 100 ? actSend(false) : actSend(true);
  return (
    <>
      <MemoizedGeneralDatas
        cliente="Mandalas"
        numeroCliente="0001"
        fechaCreacion="1986/01/07"
      />
      {total(10)}
      {progress(updatingProgress.progress)}
      {actSend(updatingProgress.progress)}
    </>
  );
};
