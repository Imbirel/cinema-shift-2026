import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <div>
      <h1>404</h1>
      <p>Упс! Похоже, такая страница не существует.</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}
