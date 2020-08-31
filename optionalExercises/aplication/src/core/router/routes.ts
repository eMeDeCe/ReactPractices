import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  login: string;
  submoduleList: string;
  employees: string;
  editEmployee: string;
  gallery: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  submoduleList: '/submodule-list',
  employees: '/employees',
  editEmployee: '/employees/:id',
  gallery: '/gallery',
};
interface Routes extends Omit<SwitchRoutes, 'editEmployee'> {
  editEmployee: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  editEmployee: id => generatePath(switchRoutes.editEmployee, { id }),
};
