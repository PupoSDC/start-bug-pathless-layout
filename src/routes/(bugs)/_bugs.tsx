import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(bugs)/_bugs')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(bugs)/_bugs"!</div>
}
