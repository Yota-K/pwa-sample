import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router'
import { Home } from './routes/Home'
import { About } from './routes/About'
import { Root } from './App'

const rootRoute = createRootRoute({
  component: Root,
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
} 
