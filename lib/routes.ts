export const Routes = {
  home: '/',
  articles: '/articles',
  article: ({ id }: { id: number }) => `/articles/${id}`,
  blogs: 'blogs',
  blog: ({ id }: { id: number }) => `/blogs/${id}`,
  reports: 'reports',
  report: ({ id }: { id: number }) => `/reports/${id}`,
};
