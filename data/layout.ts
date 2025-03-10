import { ClipboardList, Settings, UserCog, Users } from 'lucide-react';

// Menu items.
export const menuItems = [
  {
    title: 'Employees',
    url: '/owner/employees',
    icon: Users,
  },
  {
    title: 'Admins',
    url: '/owner/admins',
    icon: UserCog,
  },
  {
    title: 'Orders',
    url: '/owner/orders',
    icon: ClipboardList,
  },
  {
    title: 'Settings',
    url: '/owner/settings',
    icon: Settings,
  },
  {
    title: 'Dashboard',
    url: '/owner',
    icon: '',
  },
];
