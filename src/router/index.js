import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = new VueRouter({
	routes: [
		{
			name: '/',
			path: '/',
			component: () => import('@/App')
		},
		{
			name: 'demo1',
			path: '/demo1',
			component: () => import('@/components/demo1')
		},
	]
})

export default routes