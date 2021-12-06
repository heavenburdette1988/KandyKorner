import { LocationList } from "./components/locations/LocationList"
import { LocationProvider } from "./components/locations/LocationProvider"
import { Route, Routes } from "react-router-dom"
import { ProductList } from "./components/products/ProductList"
import { ProductProvider } from "./components/products/ProductProvider"
import { ProductTypeProvider } from "./components/productTypes/ProductTypesProvider"

export const ApplicationView = () => {
    return (

<ProductProvider>
<LocationProvider>
 <ProductTypeProvider>
  <Routes>
<Route path="locations/*" element={<LocationList />} />
<Route path="products/*" element={<ProductList />} />
</Routes>
</ProductTypeProvider>
</LocationProvider>
</ProductProvider>
     
    )
}