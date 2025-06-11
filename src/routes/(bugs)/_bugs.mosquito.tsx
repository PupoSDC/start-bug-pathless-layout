import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(bugs)/_bugs/mosquito')({
  component: RouteComponent,
  loader: ({ params }) => params 
})

function RouteComponent() {
  return <div>Hello "/(bugs)/_bugs/mosquito"!</div>
}
