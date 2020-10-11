import * as apiModel from './api/productos.api-model';
import * as viewModel from './listaProductos.vm';

const mapProductoInfoFromApiToVm = (
  ProductoInfo: apiModel.ProductoInfo
): viewModel.ProductoInfo => ({
  ...ProductoInfo,
});

export const mapProductoInfoListFromApiToVm = (
  ProductoInfo: apiModel.ProductoInfo[]
): viewModel.ProductoInfo[] =>
  ProductoInfo.map(e => mapProductoInfoFromApiToVm(e));
