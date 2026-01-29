import { Outlet, useLocation } from 'react-router';

// Это заготовка. Можно не смотреть особо
export function CheckoutPage() {
  const location = useLocation();

  // Определяем номер шага для прогресс-бара
  const getStepNumber = () => {
    if (location.pathname.includes('step-1')) return 1;
    if (location.pathname.includes('step-2')) return 2;
    if (location.pathname.includes('step-3')) return 3;
    return 1;
  };

  const step = getStepNumber();

  return (
    <div className="payment-wrapper">
      <div className="stepper">
        <div
          className="stepper-line"
          style={{ width: `${(step / 3) * 100}%` }}
        />
        <span>Шаг {step} из 3</span>
      </div>

      <main className="step-content">
        <Outlet context={{}} />
      </main>
    </div>
  );
}
