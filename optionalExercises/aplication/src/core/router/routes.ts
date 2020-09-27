import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  [x: string]: any;
  root: string;
  gallery: string;
  checkout: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  gallery: '/gallery',
  checkout: '/checkout',
};
