const nextRoutes = require('@yolkai/next-routes').default;

const routes = nextRoutes()
  // .add({name: 'homePageBr', pattern: '/home', page: 'index'})
  // .add({name: 'homePageEn', locale: 'en', pattern: '/en/home', page: 'index'});

  
  .add({name: 'homePage', locale: 'pt', pattern: '/:lang(pt|en|es)/home', page: 'index'});
module.exports = routes;
