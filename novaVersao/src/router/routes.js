import Default from 'layouts/MyLayout.vue'
import Index from 'pages/Index.vue'
import Portifolio from 'pages/Portifolio.vue'
import Error from 'pages/Error404.vue'

const routes = [
  {
    path: '/',
    component: Default,
    children: [
      { path: '', component: Index },
      { path: '/portifolio', component: Portifolio , name: 'portifolio'}
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: Error
  })
}

export default routes
