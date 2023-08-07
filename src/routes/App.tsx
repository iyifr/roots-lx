// import { Box } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import Home from "../features/Home"
import Layout from "./Layout"
import CategoriesHero from "../features/Home/catalogue"
import NotFound from "../common/Notfound"


function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<CategoriesHero />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
