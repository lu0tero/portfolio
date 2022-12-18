import adviceGenerator from './src/assets/projects/adviceGenerator.gif'
import coldplayWebsite from './src/assets/projects/coldplayWebsite.gif'
import reactEcommerce from './src/assets/projects/reactEcommerce.gif'
import toDoList from './src/assets/projects/toDoList.gif'
import weatherApi from './src/assets/projects/weatherApi.gif'
import html from './src/assets/img/icons/html.png'
import css from './src/assets/img/icons/css.png'
import js from './src/assets/img/icons/js.png'
import react from './src/assets/img/icons/react.png'
import bootstrap from './src/assets/img/icons/bootstrap.png'
import sass from './src/assets/img/icons/sass.png'

const data = [
   
    {   
        img: reactEcommerce,
        title: 'Vinyls Ecommerce',
        tecnologies: [react],
        link: 'https://react-ecommerce-app-six.vercel.app/'
    },

    {
        img: toDoList,
        title: 'To Do List',
        tecnologies: [html, css, js],
        link: 'https://celebrated-zuccutto-358bea.netlify.app/pages/calendiary.html'
    },
    
    {
        img: adviceGenerator,
        title: 'Advice Generator',
        tecnologies: [html, css, js],
        link: 'https://cerulean-melomakarona-859719.netlify.app/'
    },

    {
    img: coldplayWebsite,
    title: 'Coldplay Website',
    tecnologies: [html, sass, bootstrap],
    link: 'https://zippy-peony-787f83.netlify.app/'
    },


    {
        img: weatherApi,
        title: 'Weather Api',
        tecnologies: [html, css, js],
        link: 'https://remarkable-axolotl-3573ca.netlify.app/'
    },


]

export default data;