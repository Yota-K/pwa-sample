import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router'
import { Home } from './routes/Home'
import { Dictionary } from './routes/Dictionary'
import { Learning } from './routes/Learning'
import { Root } from './App'

const rootRoute = createRootRoute({
  component: Root,
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const dictionaryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dictionary',
  component: Dictionary,
})

const learningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learning',
  component: Learning,
})

const routeTree = rootRoute.addChildren([
  homeRoute,
  dictionaryRoute,
  learningRoute,
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
} 
