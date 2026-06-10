import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function CharacterCardSkeleton() {
  return (
    <Card className="overflow-hidden border-zinc-800 bg-zinc-900">
      <Skeleton className="h-64 w-full" />
      <CardContent className="space-y-2 p-4">
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-5 w-1/3" />
      </CardContent>
    </Card>
  )
}