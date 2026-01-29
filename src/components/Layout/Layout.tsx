import { Outlet } from 'react-router';

import { Header } from '@/components/Layout/Header';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col max-w-content mx-auto px-1 w-full">
        <Outlet />
      </main>
    </div>
  );
}
