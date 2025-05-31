import { Card, CardContent, CardTitle } from '../ui/card'
import { Skeleton } from "../ui/skeleton"

const EntryExitDetailCard = ({ title, value, isLoading }: any) => {
  return (
    <Card className="w-full sm:w-[200px] lg:w-[225px] xl:w-[200px] h-[100px] items-center justify-center border-[#F92602]">
      <CardTitle className='text-[#F92602] m-0'>
        {title}
      </CardTitle>
      <CardContent className='font-semibold'>
        {isLoading ? (
          <Skeleton className="h-5 w-20 mt-2 bg-[#ffe4de]" />
        ) : (
          value ? value : <span className='font-normal text-sm'>Data Not Found</span>
        )}
      </CardContent>
    </Card>
  )
}

export default EntryExitDetailCard
