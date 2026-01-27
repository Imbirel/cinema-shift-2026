import { Outlet } from 'react-router';

import { Header } from '@/components/Layout/Header';

export function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
