const routes = {
  '/': () => import('./pages/main.js'),
  '/sign': () => import('./pages/sign.js'),
};

// Функция для загрузки страниц
const router = async () => {
  const app = document.getElementById('app');
  let path = window.location.pathname;

  if (!routes[path]) {
    path = '/'; // Если путь не найден, показываем главную страницу
  }

  try {
    const pageModule = await routes[path]();
    app.innerHTML = pageModule.default();
  } catch (error) {
    console.error('Ошибка загрузки страницы:', error);
    app.innerHTML = `<h1>Ошибка загрузки</h1>`;
  }
};

// Функция для переключения страниц
const navigateTo = (path) => {
  window.history.pushState({}, '', path);
  router();
};

// Обрабатываем клики по ссылкам
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.getAttribute('href'));
    }
  });

  window.addEventListener('popstate', router);
  router();
});
