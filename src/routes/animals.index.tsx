import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/animals/')({
  component: RouteComponent,
  loader: ({ context}) => {
    context.variable = "Context /animals";
  }
})

function RouteComponent() {
  return <div>Hello "/animals/"!</div>
}
