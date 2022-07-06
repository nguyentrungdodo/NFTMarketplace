import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogsView from '../views/BlogView.vue'
import AuthorsView from '../views/AuthorsView.vue'
import AuthorDetails from '../views/author-details.vue'
import ContactView from '../views/ContactView.vue'
import login from '../views/LoginView.vue'
import ActivityView from '../views/ActivityView.vue'
import BlogDetails from '../views/blog-details.vue'
import HelpCenter from '../views/HelpCenterView.vue'
import Signup from '../views/signup.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import( '../components/create-section/create-section.vue')
  },
  {
    path: '/item-detail/:id',
    name: 'media-detail',
    props:true,
    component: () => import( '../views/item-details.vue')
  },
  {
    path: '/header',
    name: 'headerSection',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../components/Header/HeaderSection.vue')
  },
  {
    path: '/blogs',
    name: 'blogsection',
    component: BlogsView
  }, 
  {
    path: '/authors',
    name: 'authorsection',
    component: AuthorsView
  },
  {
    path: '/author-detail',
    // path: '/author-detail/:id',
    component: AuthorDetails,
  },
  {
    path: '/contact',
    component: ContactView
  },
  {
    path:'/login',
    component:login
  },
  {
    path: '/activity',
    component: ActivityView
  },
  {
    path: '/blog-detail',
    component: BlogDetails
  },
  {
    path: '/help-center',
    component: HelpCenter
  },
  {
    path: '/signup',
    component: Signup
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
