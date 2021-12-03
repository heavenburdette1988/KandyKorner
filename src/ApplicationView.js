import { LocationList } from "./components/locations/LocationList"
import { LocationProvider } from "./components/locations/LocationsProvider"
import { Route, Routes } from "react-router-dom"

export const ApplicationView = () => {
    return (
<>

<LocationProvider>
  <Routes>
<Route path="locations/*" element={<LocationList />} />
</Routes>
</LocationProvider>

</>
        
    )
}