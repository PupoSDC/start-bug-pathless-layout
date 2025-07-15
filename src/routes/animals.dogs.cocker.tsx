import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/animals/dogs/cocker')({
  component: RouteComponent,
  loader: ({ context }) => {
    context.variable = "Context /animals/dogs/cocker";
  }
})

function RouteComponent() {
  return <div>Hello "/animals/docs/cocker"!</div>
}
