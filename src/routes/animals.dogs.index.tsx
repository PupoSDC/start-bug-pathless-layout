import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/animals/dogs/')({
  component: RouteComponent,
  loader: ({ context }) => {
    context.variable = "Context /animals/dogs";
  }
})

function RouteComponent() {
  return <div>Hello "/animals/docs"!</div>
}
