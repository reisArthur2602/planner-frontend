export type NavLink = {
  title: string;
  path: string;
};

export const NAVLINKS = [
  {
    title: 'Início',
    path: '/dashboard',
  },
  {
    title: 'Tarefa',
    path: '/dashboard/task',
  },
  {
    title: 'Sincronizar',
    path: '/dashboard/sync',
  },
] as const;
