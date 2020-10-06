import React from 'react';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { PageHeader, Descriptions } from 'antd';
import './header.layaut.css';

const rightNow = new Date();
const date = rightNow
  .toISOString()
  .slice(0, 10)
  .replace(/-/g, '/');

export const HeaderLayout: React.FC = ({ children }) => (
  <>
    <div className="site-page-header-ghost-wrapper">
      <PageHeader ghost={false} title=" Número de pedido:" subTitle="0001">
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Fecha">{date}</Descriptions.Item>
          <Descriptions.Item label="Cliente">
            <a>Nuevo Cliente</a>
          </Descriptions.Item>
          <Descriptions.Item label="Fecha de alta">
            2020/04/17
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
      {children}
    </div>
  </>
);
