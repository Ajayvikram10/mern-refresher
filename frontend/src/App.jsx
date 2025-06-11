import {Box, Button} from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Button>Hello</Button>
      <Box minH={"100vh"}>

        <Routes>

          <Route path="/" element= {<HomePage/>} />
        </Routes>

      </Box>

    </>
  )
}

export default App
