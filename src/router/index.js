import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Create from '@/views/Create.vue'
import Read from '@/views/Read.vue'
import Update from '@/views/Update.vue'
import Delete from '@/views/Delete.vue'

const routes = [
        {path: '/', name: 'Home', component: Home},
        {path: '/create', name: 'Create', component: Create},
        {path:'/read', name: 'Read', component: Read},
        {path:'/update', name: 'Update', component: Update},
        {path:'/delete', name: 'Delete', component: Delete},
        
    ]

const router = createRouter( { 
    history: createWebHistory(),
    routes
})

export default router