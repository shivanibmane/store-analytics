import { useEffect, useState } from "react"
import CameraTemperingBarChart from "./CameraTemperingBarChart"
import CameraTemperingPieChart from "./CameraTemperingPieChart"
import { toast } from "sonner"

const CameraTempering = () => {
  const [cameraWiseTepmering, setCameraWiseTempering] = useState(null)
  const [cameraTemperingTrend, setComeraTemperingTrend] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const fetchCameraTemperingData = async () => {
      try {
        const [cameraWiseRes, trendRes] = await Promise.all([
          fetch("http://localhost:8000/CameraWiseTempering"),
          fetch("http://localhost:8000/CameraTemperingReason"),
        ])

        const cameraWiseTepmeringData = await cameraWiseRes.json()
        const camerWieseTepmeringTrendData = await trendRes.json()

        setCameraWiseTempering(cameraWiseTepmeringData)
        setComeraTemperingTrend(camerWieseTepmeringTrendData)
        setIsLoading(false)

        const iscamerWieseTepmeringTrend = Array.isArray(camerWieseTepmeringTrendData) && camerWieseTepmeringTrendData?.length > 0
        const iscamerWieseTepmeringTrendData = Array.isArray(camerWieseTepmeringTrendData) && camerWieseTepmeringTrendData?.length > 0

        if (iscamerWieseTepmeringTrend && iscamerWieseTepmeringTrendData) {
          toast.success("Data Loaded Successfully")
        }
        else {
          toast.warning("Data Not Found")
        }
      } catch (error) {
        toast.error("Failed to Load The Data. Please Check Your Server or Network")
        setIsLoading(false)
      }
    }
    fetchCameraTemperingData()
  }, [])


  return (
    <div className="w-full">
      <h1 className="text-1xl font-semibold text-center sm:text-start">Camera Tempering</h1>
      <div className="flex flex-col gap-4 py-3">
        <CameraTemperingPieChart cameraWiseTepmering={cameraWiseTepmering} isLoading={isLoading} />
        <CameraTemperingBarChart cameraTemperingTrend={cameraTemperingTrend} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default CameraTempering
