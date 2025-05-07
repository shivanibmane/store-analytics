import { AdvancedMarker, APIProvider, Map, Pin, } from "@vis.gl/react-google-maps";

const MapProvider = () => {
  const googleMapApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  const locations = [
    { id: 1, lat: 12.904165299756686, lng: 77.60159424997742, name: "Company 1" },
    { id: 2, lat: 12.910000, lng: 77.610000, name: "Company 2" },
    { id: 3, lat: 12.915000, lng: 77.605000, name: "Company 3" },
    { id: 4, lat: 12.920000, lng: 77.615000, name: "Company 4" },
    { id: 5, lat: 12.925000, lng: 77.620000, name: "Company 5" },
    { id: 6, lat: 12.930000, lng: 77.61, name: "Company 6" },
    // You can add more locations here!
  ];

  const position = { lat: 12.904165299756686, lng: 77.60159424997742 };

  return (
    <div className="flex mx-auto justify-center mt-10">
      <APIProvider apiKey={googleMapApiKey} >
        <Map
          mapId={"b563f088d8ab751a"}
          className="w-11/12 h-[600px]"
          defaultZoom={13}
          defaultCenter={position}
        >
          {locations.map((location) => (
            <AdvancedMarker
              key={location.id}
              position={{ lat: location.lat, lng: location.lng }}
            >
              <Pin />
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>

    </div >
  )
}

export default MapProvider
