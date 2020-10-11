import { ProductoInfo } from './productos.api-model';
import { mockProductoInfo } from './productos.mock-data';

let producto = [...mockProductoInfo];

export const getProducto = async (): Promise<ProductoInfo[]> => {
  return producto;
};

export const deleteProducto = async (id: string): Promise<boolean> => {
  producto = producto.filter(e => e.id !== id);
  return true;
};
