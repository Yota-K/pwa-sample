import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router'
import { Home } from './routes/Home'
import { Lesson } from './routes/Lesson'
import { Root } from './App'

const rootRoute = createRootRoute({
  component: Root,
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const lessonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/lesson/$id',
  component: Lesson,
})

const routeTree = rootRoute.addChildren([
  homeRoute,
  lessonRoute,
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
} 
