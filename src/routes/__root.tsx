/// <reference types="vite/client" />
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
  createRootRouteWithContext,
  useRouterState,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import * as React from 'react'
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary'
import { NotFound } from '~/components/NotFound'
import appCss from '~/styles/app.css?url'
import { seo } from '~/utils/seo'

export const Route = createRootRouteWithContext<{
  variable: string,
}>()({
  component: RootComponent,
})

function RootComponent() {
  const matches = useRouterState({ select: (s) => s.matches });
    
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <ul>
          {matches.map((match) => (
            <li key={match.id}>
              {match.context.variable}
            </li>
          ))}
        </ul>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}