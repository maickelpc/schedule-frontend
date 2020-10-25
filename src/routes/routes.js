import Dashboard from '../pages/Dashboard.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import UserSchedule from '../pages/UserSchedule.vue'
import LoginPage from '../pages/LoginPage.vue'

const routes = [
  {
    path: '/',
    component: Dashboard
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/:id',
    component: UserSchedule
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
