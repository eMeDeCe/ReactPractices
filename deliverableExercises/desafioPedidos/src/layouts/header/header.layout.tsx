import React from 'react';
import 'antd/dist/antd.css';
import { PageHeader, Descriptions, Button, Progress, message } from 'antd';
import './header.layaut.css';
import { PedidoGeneradoContext } from 'common-app/pedido';

const rightNow = new Date();
const date = rightNow
  .toISOString()
  .slice(0, 10)
  .replace(/-/g, '/');

function generalDatas({ cliente, numeroCliente, direccion }) {
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
          <Descriptions.Item label="Dirección">{direccion}</Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </div>
  );
}

const success = () => {
  message.success('Enviado correctamente');
};

const warning = () => {
  message.warning('Comprueba el pedido antes de enviarlo');
};

function actSend(send) {
  if (send < 100) {
    return (
      <Button key="3" onClick={warning}>
        Enviar
      </Button>
    );
  } else {
    return (
      <Button key="1" type="primary" onClick={success}>
        Enviar
      </Button>
    );
  }
}

function progeso(stateProgess) {
  return <Progress type="circle" percent={stateProgess} className="progress" />;
}

function totalInfo(totalPedido) {
  return (
    <div className="box">
      <span> Total pedido : </span>
      <div className="blue">{totalPedido} €</div>
    </div>
  );
}

const MemoizedGeneralDatas = React.memo(generalDatas);

export const HeaderLayout: React.FC = () => {
  const { progress, ctotal } = React.useContext(PedidoGeneradoContext);
  progress < 100 ? actSend(false) : actSend(true);
  return (
    <>
      <MemoizedGeneralDatas
        cliente="Mandalas"
        numeroCliente="0001"
        direccion="info@mandalas.com"
      />
      {totalInfo(ctotal)}
      {progeso(progress)}
      {actSend(progress)}
    </>
  );
};
