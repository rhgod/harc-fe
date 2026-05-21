import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty"

function App() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          Bu sayfa yapım aşamasında. Lütfen daha sonra tekrar deneyin.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}

export default App