import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  [x: string]: any;
  root: string;
  login: string;
  gallery: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  gallery: '/gallery',
  checkout: '/checkout',
};
