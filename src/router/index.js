import {createRouter, createWebHistory} from 'vue-router'

//define a routes
const routes = [
	{
		path: '/',
		name: 'Articles.index',
		component: () => import('@/views/Articles/Index.vue')
	},
	{
		path: '/create',
		name: 'Articles.create',
		component: () => import('@/views/Articles/Create.vue')
	},
	{
		path: '/edit/:id',
		name: 'Articles.edit',
		component: () => import('@/views/Articles/Edit.vue')
	}
]

//create router
const router = createRouter({
	history: createWebHistory(),
	routes //config routes
})

export default router