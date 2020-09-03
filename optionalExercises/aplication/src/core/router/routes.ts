import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  login: string;
  gallery: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  gallery: '/gallery',
};
