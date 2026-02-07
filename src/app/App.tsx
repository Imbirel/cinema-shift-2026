import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import { Step1Seats } from '@/features/checkout/components/Step1Seats';
import { Step2Info } from '@/features/checkout/components/Step2Info';
import { Step3Payment } from '@/features/checkout/components/Step3Payment';
import { CatalogPage } from '@/pages/catalog';
import { CheckoutPage } from '@/pages/CheckoutPage';
import { MoviePage } from '@/pages/movie';
import { NotFoundPage } from '@/pages/not-found';
import { ProfilePage } from '@/pages/ProfilePage';
import { TicketsPage } from '@/pages/TicketsPage';

import { BaseLayout } from './layouts/base-layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/films/:id" element={<MoviePage />} />
          <Route path="/films/:id/payment" element={<CheckoutPage />}>
            <Route index element={<Navigate to="step-1" replace />} />
            <Route path="step-1" element={<Step1Seats />} />
            <Route path="step-2" element={<Step2Info />} />
            <Route path="step-3" element={<Step3Payment />} />
          </Route>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/tickets" element={<TicketsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
