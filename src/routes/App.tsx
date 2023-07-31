// import { Box } from "@chakra-ui/react"
import { Divider } from "@chakra-ui/react"
import TopHeader from "../features/Navigation/Header"
import Ui from "../features/Navigation/Ui"


function App() {

  return (
    <>
      <TopHeader />
      <Ui />
      <Divider maxW={'90%'} mx={'auto'} borderTop={'2px'} color={"black"} />
    </>
  )
}

export default App
