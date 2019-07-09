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
		{
			name: 'demo2',
			path: '/demo2',
			component: () => import('@/components/demo2')
		},
	]
})

export default routes