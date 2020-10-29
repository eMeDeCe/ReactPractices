import { ProductoInfo } from './productos.api-model';
import { mockProductoInfo } from './productos.mock-data';

let producto = [...mockProductoInfo];

export const getProducto = async (): Promise<ProductoInfo[]> => {
  return producto;
};

export const deleteProducto = async (key: string): Promise<boolean> => {
  producto = producto.filter(e => e.key !== key);
  return true;
};
