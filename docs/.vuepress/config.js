const blogSidebar = require("../services/blog/blog.config.js").sidebar;

const sidebar = {};

sidebar['/services/blog/'] = blogSidebar;


module.exports = {
  title: 'AirzoneDev',
  description: 'Documentación de Airzone',
  port: 7001,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Servicios', link: '/services/' },
      { text: 'Aplicaciones', link: '/apps/' },
      { text: 'Wiki', items: [
        { text: 'Desarrollo', link: '/development/' },
        { text: 'Plantillas', link: '/templates/' },
        { text: 'Stack', link: '/stack/' },
        { text: 'Styleguides', link: '/styleguides/' },
        { text: 'CheatSheets', link: '/cheatsheets/' },
      ] },
    ],
    sidebar,
  }
}
