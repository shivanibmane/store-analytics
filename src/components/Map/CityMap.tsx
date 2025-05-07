import Header from "../Header"
import MapProvider from "./MapProvider";

const CityMap = () => {
  return (
    <div className="w-full">
      <Header title={"City Map"} />
      <MapProvider />
    </div>
  )
}

export default CityMap
