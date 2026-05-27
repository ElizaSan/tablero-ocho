import {

  Routes,
  Route

} from "react-router-dom"

import { Navbar } from "./components/Navbar"

import { Home } from "./pages/Home"

import { Play } from "./pages/Play"

import { Learn } from "./pages/Learn"

function App(){

  return (

    <>

      <Navbar />

      <Routes>

        <Route

          path="/"

          element={<Home />}
        />

        <Route

          path="/play"

          element={<Play />}
        />

        <Route

          path="/learn"

          element={<Learn />}
        />

      </Routes>

    </>
  )
}

export default App