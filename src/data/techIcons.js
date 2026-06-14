const BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

export const techIcons = {
  // Frontend
  'React':        `${BASE}/react/react-original.svg`,
  'Next.js':      `${BASE}/nextjs/nextjs-original.svg`,
  'JavaScript':   `${BASE}/javascript/javascript-original.svg`,
  'TypeScript':   `${BASE}/typescript/typescript-original.svg`,
  'HTML5':        `${BASE}/html5/html5-original.svg`,
  'CSS3':         `${BASE}/css3/css3-original.svg`,
  'Tailwind CSS': `${BASE}/tailwindcss/tailwindcss-plain.svg`,
  'Vite':         `${BASE}/vite/vite-original.svg`,

  // Backend
  'Node.js':      `${BASE}/nodejs/nodejs-original.svg`,
  'Python':       `${BASE}/python/python-original.svg`,
  'Django':       `${BASE}/django/django-plain.svg`,
  'Flask':        `${BASE}/flask/flask-original.svg`,
  'FastAPI':      `${BASE}/fastapi/fastapi-original.svg`,
  'Express.js':   `${BASE}/express/express-original.svg`,
  'GraphQL':      `${BASE}/graphql/graphql-plain.svg`,

  // ML
  'Pandas':       `${BASE}/pandas/pandas-original.svg`,
  'NumPy':        `${BASE}/numpy/numpy-original.svg`,
  'TensorFlow':   `${BASE}/tensorflow/tensorflow-original.svg`,
  'PyTorch':      `${BASE}/pytorch/pytorch-original.svg`,
  'Keras':        `${BASE}/keras/keras-original.svg`,

  // Databases
  'PostgreSQL':   `${BASE}/postgresql/postgresql-original.svg`,
  'MongoDB':      `${BASE}/mongodb/mongodb-original.svg`,
  'MySQL':        `${BASE}/mysql/mysql-original.svg`,
  'Redis':        `${BASE}/redis/redis-original.svg`,
  'SQLite':       `${BASE}/sqlite/sqlite-original.svg`,

  // Tools
  'Git':          `${BASE}/git/git-original.svg`,
  'GitHub':       `${BASE}/github/github-original.svg`,
  'Docker':       `${BASE}/docker/docker-original.svg`,
  'Linux':        `${BASE}/linux/linux-original.svg`,
  'Figma':        `${BASE}/figma/figma-original.svg`,
  'Jupyter':      `${BASE}/jupyter/jupyter-original.svg`,
  'VS Code':      `${BASE}/vscode/vscode-original.svg`,
  'Postman':      `${BASE}/postman/postman-original.svg`,
};

// Icons that are black-on-transparent — need inversion in dark mode
export const darkInvertIcons = new Set([
  'Next.js', 'Flask', 'Express.js', 'GitHub',
]);
