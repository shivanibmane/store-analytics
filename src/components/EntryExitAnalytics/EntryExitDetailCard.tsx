import { Card, CardContent, CardTitle } from '../ui/card'

const EntryExitDetailCard = ({ title, value }: any) => {
  return (
    <>
      <Card className="w-full sm:w-[200px] lg:w-[225px] xl:w-[200px] h-[100px] items-center justify-center border-[#F92602]">
        <CardTitle className='text-[#F92602] m-0'>{title}</CardTitle>
        <CardContent className='font-semibold'>{value}</CardContent>
      </Card>
    </>
  )
}

export default EntryExitDetailCard
