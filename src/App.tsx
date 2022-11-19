import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { FindYourPath } from "./pages/FindYourPath/FindYourPath"
import { Home } from "./pages/Home/Home"
import { Login } from "./pages/Login/Login"
import { MentoringPage } from "./pages/MentoringPage/MentoringPage"
import { Registration } from "./pages/Registration/Registration"
import { Trail } from "./pages/Trail/Trail"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>

          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/registration" element={<Registration/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/mentoring" element={<MentoringPage />} />
              <Route path="/find-your-path" element={<FindYourPath />} />
              <Route path="/:trailId" element={<Trail />} />
              <Route path="/find-your-path/:trailId" index element={<Trail />} 
              />
          </Routes>


      </main>
    </BrowserRouter>
  )
}

export default App