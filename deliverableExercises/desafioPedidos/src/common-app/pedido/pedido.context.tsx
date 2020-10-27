import React from 'react';
import { TotalPedido } from './pedido.vm';

interface Context extends TotalPedido {
  updatingTotal(total: number);
  updatingProgress(progress: number);
  updatingPrice(productoUpd: {});
}

export const PedidoGeneradoContext = React.createContext<Context>({
  ctotal: 0,
  progress: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updatingTotal: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updatingProgress: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updatingPrice: () => {},
});
const updatingPrice = function(productoContent) {
  console.log('Producto', productoContent);
};

export const PedidoGeneradoProvider: React.FC = ({ children }) => {
  const [ctotal, setCtotal] = React.useState();
  const updatingTotal = result => {
    setCtotal(result);
  };
  const [progress, setProgress] = React.useState(0);
  const updatingProgress = progress => {
    setProgress(progress);
  };

  return (
    <PedidoGeneradoContext.Provider
      value={{
        ctotal,
        progress,
        updatingTotal,
        updatingProgress,
        updatingPrice,
      }}
    >
      {children}
    </PedidoGeneradoContext.Provider>
  );
};
